from fastapi import UploadFile, File, Form
from app.services import pdf_parser, skill_extractor, skill_matcher,predefined_skills
from fastapi import APIRouter,HTTPException
from app.utils.feedbackGenerator import generateFeedback
router = APIRouter()

@router.post("/analyzeJobSeeker")
async def analyzeJobSeeker(resume: UploadFile=File(...), role: str = Form(...) ):
    try:
        text = await pdf_parser.extractText(resume)
        resumeSkills = skill_extractor.extractSkills(text)

        requiredSkills = predefined_skills.getSkillsForRole(role)
        missingSkills, fitPercent = skill_matcher.compareSkills(resumeSkills,requiredSkills)
        feedback = generateFeedback(
            resumeSkills,requiredSkills,missingSkills,role
        )
        return {
            "resumeSkills": resumeSkills,
            "requiredSkills": requiredSkills,
            "missingSkills": missingSkills,
            "fitPercent": fitPercent,
            "feedback": feedback
        }
    except Exception as e:
        raise HTTPException(status_code=500,detail=f"Failed to perform analysis:{str(e)}")