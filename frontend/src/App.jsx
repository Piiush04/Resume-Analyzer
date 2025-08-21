// In src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 👈 Import these
import Home from './pages/Home'; // 👈 Make sure the path is correct
import ResumeForm from './components/ResumeForm'; // 👈 Make sure the path is correct

function App() {
  return (
    <div>
      {/* 👇 Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobSeeker" element={<ResumeForm />} />
        {/* Add a route for /recruiter here if you have that component */}
        {/* <Route path="/recruiter" element={<RecruiterComponent />} /> */}
      </Routes>
    </div>
  );
}

export default App;