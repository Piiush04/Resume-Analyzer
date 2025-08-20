from pydantic import BaseModel
from typing import List

class JDInput(BaseModel):
    skills: List[str]

class AnalysisResult(BaseModel):
    resumeSkills: List[str]
    missingSkills: List[str]
    fitPercent: float