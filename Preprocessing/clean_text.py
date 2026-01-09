import re
from typing import Iterable, Optional, Set, List

import nltk
from nltk.corpus import stopwords as nltk_stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer, PorterStemmer
from nltk.corpus import wordnet
from nltk import pos_tag

# Minimal constants to make behavior and tuning explicit
REQUIRED_NLTK_PACKAGES = [
    "punkt",
    "stopwords",
    "wordnet",
    "averaged_perceptron_tagger",
    "omw-1.4",
]
DEFAULT_CUSTOM_STOPWORDS = {
    "mujhe",
    "mera",
    "meri",
    "hai",
    "ho",
    "raha",
    "rahi",
    "ko",
    "se",
    "bhi",
    "mein",
    "ka",
    "ki",
}
MIN_TOKEN_LENGTH = 2


def ensure_nltk_data(packages: Iterable[str] = REQUIRED_NLTK_PACKAGES) -> None:
    """Ensure required NLTK packages are available. Downloads any missing packages.

    Downloads are performed quietly and any downloader output is suppressed so that
    running the pipeline remains clean when used in CLIs or services.

    This function is safe to call multiple times.
    """
    import io
    import contextlib

    for pkg in packages:
        path = f"tokenizers/{pkg}" if pkg == "punkt" else f"corpora/{pkg}"
        try:
            nltk.data.find(path)
        except LookupError:
            # Use quiet download and suppress any residual stdout/stderr from NLTK
            try:
                with contextlib.redirect_stdout(io.StringIO()), contextlib.redirect_stderr(io.StringIO()):
                    nltk.download(pkg, quiet=True)
            except Exception:
                # If anything goes wrong during download, fail silently – best-effort only
                pass


def simple_clean_text(text: str) -> str:
    """Lightweight cleaning: lowercase, remove punctuation, collapse whitespace.

    Use this when you want a fast, dependency-free normalization.
    """
    if not isinstance(text, str):
        return ""

    text = text.lower()
    text = re.sub(r"[^\w\s]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def _map_pos_to_wordnet(treebank_tag: str) -> str:
    """Map NLTK POS tags (Treebank) to WordNet POS tags used by the lemmatizer."""
    if treebank_tag.startswith("J"):
        return wordnet.ADJ
    if treebank_tag.startswith("V"):
        return wordnet.VERB
    if treebank_tag.startswith("N"):
        return wordnet.NOUN
    if treebank_tag.startswith("R"):
        return wordnet.ADV
    return wordnet.NOUN


def _get_stopword_set(language: str = "english", extra: Optional[Iterable[str]] = None) -> Set[str]:
    """Build a stopword set from NLTK + custom project stopwords.

    If NLTK stopwords are not available, returns only the custom stopwords.
    """
    stopset: Set[str] = set()
    try:
        stopset = set(nltk_stopwords.words(language))
    except LookupError:
        # If data is missing, ensure_nltk_data() will try to fetch it on next run.
        stopset = set()

    if extra:
        stopset.update(w.lower() for w in extra)

    stopset.update(DEFAULT_CUSTOM_STOPWORDS)
    return stopset


def word_tokens(text: str) -> List[str]:
    """Normalize and tokenize text into words using NLTK's tokenizer."""
    text = text.lower()
    text = re.sub(r"[^\w\s]", " ", text)
    return word_tokenize(text)


def lemmatize_tokens(tokens: List[str]) -> List[str]:
    """Lemmatize tokens using POS tags for better results than naive lemmatization."""
    if not tokens:
        return []
    lemmatizer = WordNetLemmatizer()
    tagged = pos_tag(tokens)
    return [lemmatizer.lemmatize(tok, _map_pos_to_wordnet(tag)) for tok, tag in tagged]


def nltk_clean_text(
    text: str,
    remove_stopwords: bool = True,
    lemmatize: bool = True,
    stemming: bool = False,
    remove_numbers: bool = True,
    language: str = "english",
    extra_stopwords: Optional[Iterable[str]] = None,
) -> str:
    """Readable pipeline for text cleaning using NLTK.

    Parameters:
    - remove_stopwords: remove NLTK stopwords + project custom stopwords
    - lemmatize: apply WordNet lemmatization (recommended if True)
    - stemming: apply Porter stemming (mutually exclusive with lemmatize)
    - remove_numbers: drop pure numeric tokens
    - language: language for NLTK stopwords
    - extra_stopwords: additional custom stopwords

    Returns a cleaned single string with tokens joined by spaces.
    """
    # Ensure required NLTK data is available (no-op if already present)
    ensure_nltk_data()

    if not isinstance(text, str):
        return ""

    tokens = word_tokens(text)

    if remove_numbers:
        tokens = [t for t in tokens if not t.isdigit()]

    if remove_stopwords:
        stopset = _get_stopword_set(language, extra_stopwords)
        tokens = [t for t in tokens if t not in stopset]

    if lemmatize and tokens:
        tokens = lemmatize_tokens(tokens)
    elif stemming and tokens:
        porter = PorterStemmer()
        tokens = [porter.stem(t) for t in tokens]

    tokens = [t for t in tokens if len(t) >= MIN_TOKEN_LENGTH]

    return " ".join(tokens)


# Backwards-compatible helpers
clean_text = simple_clean_text


def remove_stopwords(text: str) -> str:
    """Quick convenience function: remove stopwords using the NLTK pipeline."""
    return nltk_clean_text(text, remove_stopwords=True, lemmatize=False, stemming=False)


# Simple demo when run directly
if __name__ == "__main__":
    sample = "Mujhe headache ho raha hai and feeling very tired!! I've had a fever of 101 for 2 days."

    print("Original:", sample)
    print("--- simple_clean_text ---")
    print(simple_clean_text(sample))

    print("--- nltk_clean_text (default) ---")
    print(nltk_clean_text(sample))

    print("--- nltk_clean_text (keep numbers, no stopwords) ---")
    print(nltk_clean_text(sample, remove_stopwords=False, remove_numbers=False))
