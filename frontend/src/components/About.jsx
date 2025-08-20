import '../styles/home.css';

const about = () => {
    return (
        <div className="about">
            <div className="data">
                <h2>About Resume Analyzer</h2>
                <p>Welcome to Resume Analyzer — a smart, AI-powered tool designed to help job seekers and recruiters get quick insights from resumes and job descriptions.</p>
                <h3>Purpose</h3>
                <p>This tool simplifies the resume evaluation process by providing:

                    For Job Seekers:
                    Upload your resume and select your desired role. The tool will analyze your resume and provide AI-generated feedback to help you improve your chances of getting hired.

                    For Recruiters:
                    Upload a candidate's resume along with a job description (text or file), and get an instant skill comparison report to evaluate candidate-job fit.</p>
                <h3>Key Features</h3>
                <p>📄 Resume Upload for Analysis,  🧠 AI-based Feedback (for Job Seekers),  🔍 JD Matching (for Recruiters), ⏱️ Fast and Simple Interface,  ❌ No Signup Required</p>
                <h3>Tech Stack</h3>
                <p>Frontend: React.js,

                    Backend: Node.js + Express,    AI Integration: Cohere API,

                    Deployment: Render + Firebase Hosting</p>
                <h3>Why Use This?</h3>
                <p>Most job seekers miss small things in their resumes that cost them interviews. And recruiters waste time manually screening mismatched resumes.
                    Resume Analyzer bridges this gap with a fast, intelligent, and user-friendly approach.</p>
            </div>
        </div>
    );
};

export default about;
