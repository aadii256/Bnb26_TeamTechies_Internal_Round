from fastapi import FastAPI

app = FastAPI(title="CreatorAI")


@app.get("/")
def home():
    return {
        "message": "CreatorAI AI Service is running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }