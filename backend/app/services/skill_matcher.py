def compareSkills(resumeSkills,jdSkills):
    resumeSet = set(resumeSkills)
    jdSet = set(jdSkills)
    missing = jdSet-resumeSet
    fitPercent= (len(resumeSet & jdSet)/len(jdSkills))*100 if jdSkills else 0
    return list(missing), round(fitPercent,2)