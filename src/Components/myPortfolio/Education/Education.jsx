import React from "react";
import "./Education.css"; // CSS file for styling

const educationData = [
    {
        degree: "Bachelor of Technology in Civil Engineering",
        institution: "Jabalpur Engineering college, Jabalpur (MP)",
        year: "2018 - 2021"
    },
    {
        degree: "Diploma in Civil Engineering ",
        institution: "Rajiv Gandhi Prodyogiki vishwavidyalaya",
        year: "2015 - 2018"
          
    },

    {
        degree: "10+2 Board Examination(PCM)",
        institution: "MP Board ",
        year: "2013 - 2015"
          
    },
];

const Education = () => {
    return (
        <div className="education-container">
            <h2>Education</h2>
            {educationData.map((edu, index) => (
                <div key={index} className="education-item">
                    <h3>{edu.degree}</h3>
                    <p className="institution">{edu.institution}</p>
                    <p className="year">{edu.year}</p>
                     
                </div>
            ))}
        </div>
    );
};

export default Education;
