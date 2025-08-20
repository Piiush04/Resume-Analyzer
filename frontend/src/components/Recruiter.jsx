import React, { useState } from 'react';
import axios from 'axios';
import '../styles/home.css';

const ResumeForm = () => {
    const [resume, setResume] = useState(null);
    const [jdText, setJdText] = useState('');
    const [jdFile, setJdFile] = useState(null);
    const [result, setResult] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleResumeChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleJdTextChange = (e) => {
        setJdText(e.target.value);
    };
    const handleJdFileChange = (e) => {
        setJdFile(e.target.files[0]);
    };
    const API_URL = import.meta.env.VITE_API_URL;
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!resume) {
            alert('Please upload a resume');
            return;
        }
        const formData = new FormData();

        if (resume) formData.append('resume', resume);
        if (jdText) formData.append('jdText', jdText);
        if (jdFile) formData.append('jdFile', jdFile);

        if (!jdText && !jdFile) {
            alert('Please provide a job description (text or file)');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post(`${API_URL}/analyze-recruiter`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setResult(response.data);
            setShowModal(true);
        } catch (error) {
            console.error("Error:", error);
            alert('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='recruiter'>
            <h2>Resume Analyzer</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept=".pdf" onChange={handleResumeChange} id='resumeInput' />
                <label className='label' htmlFor="resumeInput">Upload Resume</label>

                <input type="text" placeholder='Enter Job Description' value={jdText} onChange={handleJdTextChange} id='jdInput' />
                <input type="file" accept='.pdf' onChange={handleJdFileChange} id='jdFile' />
                <label htmlFor="jdFile" className='label'>Job Description</label>
                <button type='submit'>Analyze</button>
            </form>
            {isLoading && (
                <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                    <h3>Analyzing your resume, please wait...</h3>
                </div>
            )}
            {showModal && result && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => setShowModal(false)}>×</span>
                        <h3>Analysis Result</h3>
                        <p><strong>Match Percentage:</strong> {result.fitPercent}%</p>
                        <p><strong>Resume Skills:</strong> {result.resumeSkills.join(', ')}</p>
                        <p id='RequiredSkills'><strong>Job Description Skills:</strong> {result.jdSkills.join(', ')}</p>
                        <p id='MissingSkills'><strong>Missing Skills:</strong> {result.missingSkills.join(', ')}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumeForm;

