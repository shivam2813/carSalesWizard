from fastapi import FastAPI
from routers import contact
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router,prefix='/contact',tags=["Contact"])


@app.get("/")
def home():
    return {"message": "Welcome to the API"}