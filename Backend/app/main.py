from fastapi import FastAPI
from app.routes.analyze import router as analyze_router

app = FastAPI(title="3D Word Cloud API")

@app.get("/")
def health_check():
    return {"status": "ok"}

app.include_router(analyze_router)