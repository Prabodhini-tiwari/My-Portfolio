import React from "react";
import './App.css';
import Navbar from './Components/myPortfolio/Navbar/Navbar';
import Home from './Components/myPortfolio/Home/Home';
import Projects from './Components/myPortfolio/Projects/Projects';
import Experience from './Components/myPortfolio/Experience/Experience';
import Contact from './Components/myPortfolio/Contact/Contact';
import AboutAndSkills from './Components/myPortfolio/AboutAndSkills/AboutAndSkills';
import Education from './Components/myPortfolio/Education/Education';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="AboutAndSkills" className="section">
        <AboutAndSkills />
      </div>
      <div id="experience" className="section">
        <Experience />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="education" className="section">
        <Education />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
    </div>
  );
}

export default App;
