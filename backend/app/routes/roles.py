from fastapi import APIRouter,HTTPException
router = APIRouter()

@router.get("/roles")
async def getRoles():
        try:
                roles = ["Data Scientist", "Backend Developer", "Frontend Developer", "Cloud Engineer"]
                return {"roles":roles}
        except Exception as e:
                raise HTTPException(status_code=422,detail=f"Failed to get roles:{str(e)}")