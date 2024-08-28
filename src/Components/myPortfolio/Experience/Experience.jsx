import React from "react";
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="job-title">Frontend Developer</h3>
            <p className="company-name">Capgemini</p>
            <p className="location">Pune, Maharashtra</p>
            <p className="date-range">Nov-2022 to Present</p>
        
          </div>
        </div>

         

        {/* Add more timeline items as needed */}
      </div>
    </section>
  );
};

export default Experience;
