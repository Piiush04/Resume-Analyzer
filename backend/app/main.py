from fastapi import FastAPI, UploadFile, File
from app.services import pdf_parser, skill_extractor
from fastapi import APIRouter, HTTPException
from app.routes import jobSeeker, recruiter, roles
from fastapi.middleware.cors import CORSMiddleware


router = APIRouter()
app = FastAPI()

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



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","https://resume-analyzer-omega-ashen.vercel.app"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


