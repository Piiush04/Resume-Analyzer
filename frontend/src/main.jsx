// main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App.jsx';
// import JobSeeker from './components/JobSeeker.jsx';
// import Recruiter from './components/Recruiter.jsx';
// import Home from './components/Home.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/jobSeeker" element={<JobSeeker />} />
//       <Route path="/recruiter" element={<Recruiter />} />
//       <Route path='/home' element={<Home />}/>
//     </Routes>
//   </BrowserRouter>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

