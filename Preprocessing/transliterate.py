"""
Language detection and translation helpers for the preprocessing pipeline.

Features:
- detect_language(text) -> (lang_code, confidence)
- translate_to_english(text, src=None) -> (translated_text, detected_source)
- translate_if_needed(text) -> translated_text (always in English)

Dependencies (install if missing):
- langdetect (pip install langdetect)
- deep-translator (pip install deep-translator)

The code is defensive: if a library is missing it raises an informative ImportError.
"""
from __future__ import annotations

import re
from typing import Optional, Tuple

# Optional imports with helpful errors at runtime
try:
    from langdetect import detect_langs, DetectorFactory
    DetectorFactory.seed = 0
except Exception:  # ImportError or other
    detect_langs = None

try:
    from deep_translator import GoogleTranslator
except Exception:
    GoogleTranslator = None

# Unicode script regexes for heuristic fallbacks
_DEVANAGARI = re.compile(r"[\u0900-\u097F]")  # Hindi, Marathi, Nepali (Devanagari)
_BENGALI = re.compile(r"[\u0980-\u09FF]")  
_TAMIL = re.compile(r"[\u0B80-\u0BFF]")  
_TELUGU = re.compile(r"[\u0C00-\u0C7F]")  
_KANNADA = re.compile(r"[\u0C80-\u0CFF]")  
_MALAYALAM = re.compile(r"[\u0D00-\u0D7F]")  
_CYRILLIC = re.compile(r"[\u0400-\u04FF]")

_SCRIPT_LANGUAGE_MAP = [
    ("hi", _DEVANAGARI),
    ("bn", _BENGALI),
    ("ta", _TAMIL),
    ("te", _TELUGU),
    ("kn", _KANNADA),
    ("ml", _MALAYALAM),
    ("ru", _CYRILLIC),
]


def _detect_script_language(text: str) -> Optional[str]:
    """Heuristic script -> language mapping for short texts or when langdetect fails."""
    for lang, pattern in _SCRIPT_LANGUAGE_MAP:
        if pattern.search(text):
            return lang
    return None


def detect_language(text: str) -> Tuple[str, float]:
    """Detect the language of `text`.

    Returns a tuple: (lang_code, confidence)
    - Tries `langdetect` first if available
    - Falls back to script heuristics for short/non-Latin inputs
    - If nothing is found, returns ('en', 1.0)

    Notes:
    - langdetect can be unreliable on very short inputs; heuristics help with Indic scripts.
    """
    if not text or not text.strip():
        return "en", 1.0

    # Try langdetect when available
    if detect_langs is not None:
        try:
            results = detect_langs(text)
            if results:
                best = results[0]
                return best.lang, float(best.prob)
        except Exception:
            # Fall through to heuristics
            pass

    # Heuristic based on presence of script characters
    script_lang = _detect_script_language(text)
    if script_lang:
        return script_lang, 0.85

    # Default: assume english
    return "en", 0.5


def translate_to_english(text: str, src: Optional[str] = None) -> Tuple[str, str]:
    """Translate `text` to English and return (translated_text, detected_source_language).

    - If src is None, the function will call `detect_language` to determine source language.
    - If source language is already English, the original text is returned unchanged.
    - Uses deep_translator.GoogleTranslator under the hood (lightweight web API).

    Raises:
        ImportError: if `deep_translator` is not installed.
    """
    if not text or not text.strip():
        return text, "en"

    detected_lang, conf = detect_language(text) if src is None else (src, 1.0)

    if detected_lang == "en":
        return text, "en"

    if GoogleTranslator is None:
        raise ImportError(
            "`deep_translator` is required for translation. Install with: pip install deep-translator"
        )

    # Use 'auto' as source if detection was weak; otherwise supply detected code
    source = detected_lang if detected_lang else "auto"

    try:
        translator = GoogleTranslator(source=source, target="en")
        translated = translator.translate(text)
        return translated, detected_lang
    except Exception:
        # As a fallback, try auto-detection by the translator service itself
        try:
            translator = GoogleTranslator(source="auto", target="en")
            translated = translator.translate(text)
            return translated, detected_lang
        except Exception as exc:
            # If translation fails, raise an informative error
            raise RuntimeError(f"Translation failed: {exc}") from exc


def translate_if_needed(text: str) -> str:
    """Helper that returns an English string for any input text.

    - If text is not English, translates it.
    - Always returns a str in English (or original if translation fails).
    """
    try:
        translated, _ = translate_to_english(text)
        return translated
    except Exception:
        # Best-effort: return original text if translation fails
        return text


def transliterate_to_english(text: str, lang: Optional[str] = None) -> str:
    """Compatibility wrapper expected by `normalize.normalize_input`.

    - If `lang` suggests Hindi or the text contains Devanagari script, translate to English.
    - If the source appears to be English/Hinglish, return the original text.
    - Best-effort: fall back to auto-detection if explicit translation fails.
    """
    if not text or not text.strip():
        return ""

    hint = lang.lower() if isinstance(lang, str) else None

    # If language is explicitly Hindi or text contains Devanagari -> translate
    if hint in ("hindi", "hi") or _DEVANAGARI.search(text):
        try:
            translated, _ = translate_to_english(text, src="hi")
            return translated
        except Exception:
            # Fall back to auto-detect translator
            return translate_if_needed(text)

    # For english_hinglish or unknown -> return original (we don't transliterate Latin-script Hinglish)
    return text


if __name__ == "__main__":
    samples = [
        "मुझे 8 दिन से सर्दी और बुखार है",
        "Mujhe 2 din se bukhar hai",  # Hindi (Devanagari)
        "I have had a fever for 2 days",  # English
        "Мне два дня не удаётся заснуть",  # Russian
        "",  # empty
        "+91 98765 43210 - bukhar",  # mixed
    ]

    print("Language detection and translation samples:\n")
    for s in samples:
        lang, conf = detect_language(s)
        print(f"Text: {s!r}\n  Detected: {lang} (conf={conf:.2f})")
        try:
            translated, src = translate_to_english(s)
            print(f"  Translated ({src} -> en): {translated}\n")
        except ImportError as ie:
            print(f"  Skipped translation (missing package): {ie}\n")
        except Exception as e:
            print(f"  Translation error: {e}\n")
