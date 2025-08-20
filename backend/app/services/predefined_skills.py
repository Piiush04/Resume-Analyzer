ROLE_SKILLS = {
    "Accountant": [
        "accounting principles", "financial reporting", "tax preparation",
        "excel", "auditing", "quickbooks", "budgeting"
    ],
    "AI/ML Engineer": [
        "python", "machine learning", "deep learning", "tensorflow",
        "pytorch", "pandas", "numpy", "scikit-learn", "nlp", "computer vision"
    ],
    "Backend Developer": [
        "python", "django", "flask", "sql", "rest api", "node.js", "express",
        "databases", "api integration", "git"
    ],
    "Business Analyst": [
        "data analysis", "sql", "excel", "requirements gathering",
        "business process modeling", "tableau", "power bi"
    ],
    "Cybersecurity Analyst": [
        "network security", "firewalls", "penetration testing",
        "vulnerability assessment", "incident response", "siem",
        "encryption", "linux"
    ],
    "Data Scientist": [
        "python", "machine learning", "tensorflow", "pandas", "numpy",
        "data visualization", "scikit-learn", "statistics", "sql"
    ],
    "DevOps Engineer": [
        "ci/cd", "docker", "kubernetes", "aws", "terraform",
        "linux", "git", "ansible", "jenkins", "cloud infrastructure"
    ],
    "Digital Marketing Specialist": [
        "seo", "sem", "google analytics", "content marketing",
        "social media marketing", "email marketing", "ppc advertising"
    ],
    "Financial Analyst": [
        "financial modeling", "excel", "data analysis", "budgeting",
        "forecasting", "valuation", "accounting principles"
    ],
    "Frontend Developer": [
        "javascript", "react", "html", "css", "typescript",
        "responsive design", "redux", "tailwind css"
    ],
    "Full Stack Developer": [
        "javascript", "react", "node.js", "express", "html", "css",
        "sql", "mongodb", "git", "rest api"
    ],
    "Graphic Designer": [
        "adobe photoshop", "adobe illustrator", "figma",
        "ui design", "branding", "typography", "creativity"
    ],
    "Product Manager": [
        "product strategy", "roadmap planning", "market research",
        "user stories", "agile methodology", "stakeholder management"
    ],
    "QA Engineer": [
        "manual testing", "automation testing", "selenium", "test cases",
        "bug tracking", "api testing", "jira"
    ],
    "Risk Analyst": [
        "risk assessment", "data analysis", "financial modeling",
        "compliance", "regulations", "excel", "risk mitigation"
    ],
    "Software Developer": [
        "python", "java", "c++", "sql", "git", "software design",
        "debugging", "rest api"
    ],
    "Software Engineer": [
        "python", "java", "c++", "sql", "data structures",
        "algorithms", "git", "software architecture"
    ],
    "UX/UI Designer": [
        "ux design", "ui design", "wireframing", "prototyping",
        "figma", "adobe xd", "usability testing", "user research"
    ]
}


def getSkillsForRole(role):
    for key in ROLE_SKILLS:
        if key.lower() == role.lower():
            return ROLE_SKILLS[key]
    return []

