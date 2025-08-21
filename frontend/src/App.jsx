import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 👈 Import routing components
import Home from './pages/Home'; // 👈 Adjust path if needed
import ResumeForm from './components/ResumeForm'; // 👈 Adjust path if needed
// import RecruiterComponent from './pages/Recruiter'; // 👈 Import your recruiter component

function App() {
  return (
    <div>
      {/* 👇 Define the navigation rules for your app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobSeeker" element={<ResumeForm />} />
        {/* <Route path="/recruiter" element={<RecruiterComponent />} /> */}
      </Routes>
    </div>
  );
}

export default App;