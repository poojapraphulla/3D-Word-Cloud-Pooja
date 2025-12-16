import re
from typing import List, Dict
from sklearn.feature_extraction.text import TfidfVectorizer


def clean_text(text: str) -> str:
    """
    Performs light text cleaning suitable for keyword extraction.
    - Lowercases text
    - Removes non-alphabetic characters
    - Normalizes whitespace
    """
    if not text:
        return ""

    text = text.lower()
    text = re.sub(r"[^a-zA-Z0-9\s]", " ", text)  # keep letters, numbers and spaces
    text = re.sub(r"\s+", " ", text)          # collapse multiple spaces
    return text.strip()


def extract_keywords(text: str, top_k: int = 30) -> List[Dict[str, float]]:
    """
    Extracts top keywords from text using TF-IDF.
    Returns a list of dictionaries: { word, weight }.
    """
    if not text or len(text.strip()) == 0:
        return []

    cleaned_text = clean_text(text)

    vectorizer = TfidfVectorizer(
        stop_words="english",
        max_features=top_k
    )

    tfidf_matrix = vectorizer.fit_transform([cleaned_text])
    scores = tfidf_matrix.toarray()[0]
    words = vectorizer.get_feature_names_out()

    CUSTOM_STOP_WORDS = {
        # Reporting verbs
        "said", "says", "told", "asked", "added", "adding",
        "stated", "states", "according", "explained", "noted",
        "announced",

        # News meta
        "news", "report", "reports", "reported", "reporting",
        "article", "story", "stories", "media", "press",

        # Attribution nouns
        "official", "officials", "spokesman", "spokeswoman",
        "source", "sources", "authorities",

        # Time / framing
        "today", "yesterday", "tomorrow",
        "earlier", "later", "recent", "recently",
        "currently", "previously",

        # Generic fillers
        "people", "person", "group", "groups",
        "country", "countries",
        "government", "governments",
        "company", "companies"
    }

    keywords = [
        {"word": word, "weight": float(score)}
        for word, score in zip(words, scores)
        if score > 0 and word not in CUSTOM_STOP_WORDS
    ]

    # Sort keywords by descending importance
    keywords.sort(key=lambda x: x["weight"], reverse=True)

    return keywords