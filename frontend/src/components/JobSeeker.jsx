import React, { useState } from 'react';
import axios from 'axios';
import '../styles/home.css'; // Adjust path if needed

const ResumeForm = () => {
  const [resume, setResume] = useState(null);
  const [role, setRole] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Get the backend URL from environment variables
  const API_URL = import.meta.env.VITE_API_URL;

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

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
      // ✅ This is the CORRECT, clean API call
      const response = await axios.post(`${API_URL}/analyzeJobSeeker`, formData);
      
      setResult(response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert('Something went wrong. Check the console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  // ... rest of your JSX return statement for the form ...
  return (
    <div className='jobSeeker'>
      {/* Your form and modal JSX goes here */}
    </div>
  );
};

export default ResumeForm;