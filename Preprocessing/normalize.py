import json
import os
# Import helpers from sibling modules. When running as a package these are relative imports; when
# running the module directly as a script (python normalize.py) the relative imports fail, so
# provide fallbacks to allow simple script usage.
try:
    from .clean_text import clean_text, remove_stopwords
    # detect_language lives in `transliterate.py` (heuristic + langdetect)
    from .transliterate import detect_language, transliterate_to_english
except Exception:
    # Fallback for running `python normalize.py` directly
    from clean_text import clean_text, remove_stopwords
    from transliterate import detect_language, transliterate_to_english

# Load Keyword Map
# We use os.path to ensure we find the JSON file relative to this script
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MAP_FILE = os.path.join(BASE_DIR, 'keyword_map.json')

try:
    with open(MAP_FILE, 'r') as f:
        KEYWORD_MAP = json.load(f)
except FileNotFoundError:
    print("⚠️ Warning: keyword_map.json not found. Using empty map.")
    KEYWORD_MAP = {}

# Build a normalized phrase -> canonical label mapping.
# Support two JSON shapes:
# 1) "phrase": "label"  (legacy, flat mapping)
# 2) "label": ["phrase1", "phrase2", ...] (preferred, group by label)
KEYWORD_MAP_NORM = {}
for k, v in KEYWORD_MAP.items():
    if isinstance(v, list):
        # k is the canonical label, v is a list of variant phrases
        # Convert canonical label to a human-friendly form (underscores -> spaces)
        label = k.replace('_', ' ').strip()
        for phrase in v:
            normalized_phrase = clean_text(phrase)
            # prefer the first mapping if a phrase collides across labels
            if normalized_phrase not in KEYWORD_MAP_NORM:
                KEYWORD_MAP_NORM[normalized_phrase] = label
    else:
        # legacy: k is a phrase, v is the label
        normalized_key = clean_text(k)
        KEYWORD_MAP_NORM[normalized_key] = v

# Precompute the maximum phrase length (n-gram size) to try.
MAX_KEYWORD_NGRAM = max((len(k.split()) for k in KEYWORD_MAP_NORM.keys()), default=1)


def map_keywords(text: str) -> str:
    """Replace colloquial words/phrases using the keyword map.

    This implementation:
    - normalizes the input (lowercase, remove punctuation)
    - tries to match the longest possible n-grams first (greedy longest-first)
    - falls back to single-token passthrough when there's no mapping

    Example: "red swollen spots on my legs" -> "rash on my legs"
    """
    if not isinstance(text, str) or not text:
        return ""

    # Normalize input the same way keys were normalized
    normalized = clean_text(text)
    words = normalized.split()

    out_tokens = []
    i = 0
    while i < len(words):
        matched = False
        # Try longest n-gram first
        for n in range(MAX_KEYWORD_NGRAM, 0, -1):
            if i + n > len(words):
                continue
            phrase = " ".join(words[i : i + n])
            if phrase in KEYWORD_MAP_NORM:
                out_tokens.append(KEYWORD_MAP_NORM[phrase])
                i += n
                matched = True
                break
        if not matched:
            out_tokens.append(words[i])
            i += 1

    return " ".join(out_tokens)

def normalize_input(raw_input):
    """
    The Main Pipeline Function.
    1. Detect Language
    2. Transliterate/Translate if needed
    3. Clean Text (Lower, Remove Punctuation)
    4. Remove Stopwords
    5. Map Keywords (Hinglish -> Medical)
    """
    if not raw_input:
        return ""

    # Step 1: Detect Language
    lang, _ = detect_language(raw_input)
    
    # Step 2: Handle Hindi Script
    text = transliterate_to_english(raw_input, lang)
    
    # Step 3: Basic Cleaning
    text = clean_text(text)
    
    # Step 4: Keyword Mapping (Do this BEFORE removing stopwords to catch phrases like 'sir dard')
    text = map_keywords(text)
    
    # Step 5: Remove Stopwords (Noise reduction)
    final_text = remove_stopwords(text)
    
    return final_text

# --- Testing the Pipeline ---
if __name__ == "__main__":
    print("--- Preprocessing Layer Test ---")
    
    test_cases = [
        "muhko 2 din s bukar h",
        "Sir dard kar raha hai bahut tez",
        "I have stomach ache and vomiting",
        "Mera head hurting since morning"
    ]
    
    for case in test_cases:
        result = normalize_input(case)
        print(f"\nInput:  '{case}'")
        print(f"Output: '{result}'") 
        # Expected Output -> "2 days fever", "headache fast", "stomach pain vomiting", "headache morning"