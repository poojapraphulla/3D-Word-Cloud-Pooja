from fastapi import FastAPI
from app.routes.analyze import router as analyze_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="3D Word Cloud API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {"status": "ok"}

app.include_router(analyze_router)