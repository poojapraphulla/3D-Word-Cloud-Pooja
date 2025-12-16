from newspaper import Article

def fetch_article_text(url: str) -> str:
    """
    Fetches and parses the main text content of a news article.
    """
    article = Article(url)
    article.download()
    article.parse()

    return article.text