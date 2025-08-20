
import React from 'react';
import '../styles/home.css';
import recruiterLogo from '../assets/recruiterLogo.png';
import studentLogo from '../assets/studentIcon.jpg';

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
        <div className="card" onClick={() => window.location.href = "/jobSeeker"}>
          <img src={studentLogo} alt="Student Icon" />
          <h2>I'm a Student</h2>
        </div>
        <div className="card" onClick={()=> window.location.href="/recruiter"}>
          <img src={recruiterLogo} alt="Recruiter Icon" />
          <h2>I'm a Recruiter</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
