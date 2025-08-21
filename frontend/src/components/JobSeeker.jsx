import React, { useState } from 'react';
import axios from 'axios';
import '../styles/home.css';

const ResumeForm = () => {
  const [resume, setResume] = useState(null);
  const [role, setRole] = useState('');
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const API_URL = import.meta.env.VITE_API_URL;
  console.log("API URL:", API_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume || !role) {
      alert('Please select a resume and job role');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('role', role);

    setIsLoading(true);
    try {
      const response = await axios.post('https://resume-analyzer-ygw7.onrender.com/analyzeJobSeeker', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert('Something went wrong');
    } finally {
      setIsLoading(false);
    }
    setShowModal(true);
  };

  return (
    <div className='jobSeeker'>
      <h2>Resume Analyzer</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleResumeChange} id='resumeInput' />
        <label htmlFor="resumeInput">Upload Resume</label>
        <select value={role} onChange={handleRoleChange}>
          <option value="">Select Job Role</option>
          <option value="Accountant">Accountant</option>
          <option value="AI/ML Engineer">AI/ML Engineer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Business Analyst">Business Analyst</option>
          <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="Digital Marketing Specialist">Digital Marketing Specialist</option>
          <option value="Financial Analyst">Financial Analyst</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Graphic Designer">Graphic Designer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Risk Analyst">Risk Analyst</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="UX/UI Designer">UX/UI Designer</option>
        </select>
        <button type="submit">Analyze</button>
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
            <p ><strong>Resume Skills:</strong> {result.resumeSkills.join(', ')}</p>
            <p id='RequiredSkills'><strong>Required Skills:</strong> {result.requiredSkills.join(', ')}</p>
            <p id='MissingSkills'><strong>Missing Skills:</strong> {result.missingSkills.join(', ')}</p>
            <div className="feedback">
              <h4>Feedback</h4>
              {result.feedback.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ResumeForm;
