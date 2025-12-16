from fastapi import FastAPI

app = FastAPI(title="3D Word Cloud API")

@app.get("/")
def health_check():
    return {"status": "ok"}