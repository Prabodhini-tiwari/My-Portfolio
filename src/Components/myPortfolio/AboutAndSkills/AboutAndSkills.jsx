import React from "react";
import "./AboutAndSkills.css"; // Updated CSS file

const skillsData = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "APIs", level: 80 },
    { name: "SQL", level: 65 },
    { name: "Git & GitHub", level: 75 },
    { name: "Java", level: 60 },
];

const AboutAndSkills = () => {
    return (
        <section className="about-skills-container">
            <div className="about-content">
                <h1>About Me</h1>
                 
                <p>
                    I’m a frontend developer skilled in creating dynamic, responsive web applications that offer beautiful and functional user experiences. Proficient in HTML, CSS, JavaScript, and React, I’m passionate about modern web technologies.
                </p>

            </div>

            <div className="skills-content">
                <div className="skills-list">
                    {skillsData.map((skill) => (
                        <div className="skill-item" key={skill.name}>
                            <div className="skill-name">
                                <h3>{skill.name}</h3>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutAndSkills;
