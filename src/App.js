// import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from './Components/myPortfolio/Navbar/Navbar';
import Home from './Components/myPortfolio/Home/Home';
import Projects from './Components/myPortfolio/Projects/Projects';
import Experience from './Components/myPortfolio/Experience/Experience';
import Contact from './Components/myPortfolio/Contact/Contact';
import AboutAndSkills from './Components/myPortfolio/AboutAndSkills/AboutAndSkills';
import Education from './Components/myPortfolio/Education/Education';


 

function App() {   
  return (
    <>
        
      
      <div className="container">
        <Navbar />
        <Home />
        <AboutAndSkills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
      
      
     
    </>
  );
};

export default App;
