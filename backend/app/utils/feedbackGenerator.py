import cohere
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("CO_API_KEY")
co = cohere.Client(api_key)

def generateFeedback(resumeSkills, requiredSkills, missingSkills, role):
    prompt = f"""
    The resume includes these skills: {', '.join(resumeSkills)}.
    The required skills for the {role} role are: {', '.join(requiredSkills)}.
    The missing skills are: {', '.join(missingSkills)}.

    Generate:
    1. A brief summary of resume fitness.
    2. brief summary of the missing skills.
    3. 2-3 course recommendations from udemy,coursera or freeCodeCamp to fill those gaps with course name and platform.
    """

    response = co.chat(
        model="command-r",
        message=prompt,
        temperature=0.7
    )
    
    return response.text.strip()
