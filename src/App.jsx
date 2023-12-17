import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Project from './component/Project';
import Navbar from './component/Navbar';
import Service from './component/Service';

function App() {
  return (
    <>      
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </Router>
      

    </>
  );
}

export default App;
