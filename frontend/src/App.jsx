import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import JobSeeker from './components/JobSeeker';
import Recruiter from './components/Recruiter';
import Footer from './components/Footer';  // Optional
import About from './components/About'; // Optional

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobSeeker" element={<JobSeeker />} />
        <Route path="/recruiter" element={<Recruiter />} />
        {/* <Route path="/result" element={<Result />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
