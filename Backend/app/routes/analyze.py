from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.fetch_article import fetch_article_text
from app.services.topic_modeling import extract_keywords

router = APIRouter()

class AnalyzeRequest(BaseModel):
    url: str

@router.post("/analyze")
def analyze_article(request: AnalyzeRequest):
    """
    Accepts an article URL, fetches text, extracts keywords, and returns word cloud data.
    """
    try:
        text = fetch_article_text(request.url)

        if not text or len(text.strip()) == 0:
            raise HTTPException(
                status_code=400,
                detail="Unable to extract text from the provided URL."
            )

        keywords = extract_keywords(text)
        return keywords

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
