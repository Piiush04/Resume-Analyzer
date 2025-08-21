// In your Home.js file

import React from 'react';
import '../styles/home.css';
import recruiterLogo from '../assets/recruiterLogo.png';
import studentLogo from '../assets/studentIcon.jpg';
import { Link } from 'react-router-dom'; // 👈 Import Link

function Home() {
  return (
    <div className="homepage customfont">
      <div className="heading">
        <h1>Craft a Resume That Opens Doors.</h1>
        <p>
          Our AI analyzes your resume against key metrics sought by top recruiters and hiring managers.
          Get instant feedback to land your dream job.
        </p>
      </div>
      <div className="cards">
        {/* 👇 Wrap the card content in a Link component */}
        <Link to="https://resume-analyzer-ygw7.onrender.com/jobSeeker" className="card">
          <img src={studentLogo} alt="Student Icon" />
          <h2>I'm a Student</h2>
        </Link>
        
        {/* 👇 Do the same for the recruiter card */}
        <Link to="https://resume-analyzer-ygw7.onrender.com/recruiter" className="card">
          <img src={recruiterLogo} alt="Recruiter Icon" />
          <h2>I'm a Recruiter</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;