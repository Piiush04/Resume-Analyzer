from fastapi import FastAPI, UploadFile, File
from app.services import pdf_parser, skill_extractor
from fastapi import APIRouter, HTTPException
from app.routes import jobSeeker, recruiter, roles
from fastapi.middleware.cors import CORSMiddleware


router = APIRouter()
app = FastAPI()


origins = [
    # This is your Vercel frontend URL
    "https://resume-analyzer-amber-nine.vercel.app",
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       # List of allowed origins
    allow_credentials=True,
    allow_methods=["*"],         # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],         # Allow all headers
)

app.include_router(recruiter.router)
app.include_router(roles.router)
app.include_router(jobSeeker.router)

@app.get("/")
async def root():
    return {"message": "Welcome to the Resume Analyzer API!"}

@app.post("/uploadResume")
async def uploadResume(file: UploadFile = File(...)):
    try:
        text = await pdf_parser.extractText(file)
        skills = skill_extractor.extractSkills(text)
        return {"extractedSkills": skills}
    except Exception as e:
        raise HTTPException(status_code=500,detail=f"Failed to process resume: {str(e)}")