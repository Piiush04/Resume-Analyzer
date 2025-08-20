from fastapi import APIRouter,HTTPException
from fastapi import UploadFile, File, Form
from app.services import pdf_parser, skill_extractor, skill_matcher
from typing import Optional
router = APIRouter()

@router.post("/analyze-recruiter")
async def analyze_recruiter(
    resume: UploadFile = File(...),
    jdText: Optional[str] = Form(None),
    jdFile: Optional[UploadFile] = File(None)
):
    try:
        text = await pdf_parser.extractText(resume)
        resume_skills = skill_extractor.extractSkills(text)

        if jdText:
            jd_content = jdText
        elif jdFile:
            jd_content = await pdf_parser.extractText(jdFile)
        else:
            return {"error": "Provide either JD text or JD file."}

        jd_skills = skill_extractor.extractSkills(jd_content)

        missing_skills, fit_percent = skill_matcher.compareSkills(resume_skills, jd_skills)

        return {
            "resumeSkills": resume_skills,
            "jdSkills": jd_skills,
            "missingSkills": missing_skills,
            "fitPercent": fit_percent
        }
    except Exception as e:
        raise HTTPException(status_code=500,detail=f"Failed to perform analysis:{str(e)}")