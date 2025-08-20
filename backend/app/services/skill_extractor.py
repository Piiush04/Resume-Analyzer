import spacy
import json
from fuzzywuzzy import fuzz

nlp = spacy.load("en_core_web_sm")

with open("app/data/skills_list.json") as f:
    SKILLS_DB = json.load(f)

def extractSkills(text):
    doc = nlp(text.lower())
    extractedSkills = set()
    candidates = set(chunk.text.strip() for chunk in doc.noun_chunks)
    
    for entity in doc.ents:
        candidates.add(entity.text.strip())


    tokens = [token.text for token in doc if not token.is_stop and  not token.is_punct]
    candidates.update(tokens)
    
    for candidate in candidates:
        for skill in SKILLS_DB:
            similarity = fuzz.partial_ratio(candidate.lower(),skill.lower())
            if similarity>80:
                extractedSkills.add(skill.lower())

    return list(extractedSkills)