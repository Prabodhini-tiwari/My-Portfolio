import React from "react";
import "./Project.css";
import RecipeImage from '../../Assets/Images/RecipeImage.jpg';
import PasswordGenratorImg from '../../Assets/Images/PasswordGenrator.jpg';
import StopWatchImg from '../../Assets/Images/StopWatch.jpg';
import ToDoImage from '../../Assets/Images/todoImg.jpg';


const Projects = () => {
    return (
        <div className="projects-container">
            <h2>My Works</h2>
            <ul className="project-list">
                <li className="project-item">
                    <img src={RecipeImage} className="project-image" alt="Recipe Vault" />
                    <h3 className="project-title">Recipe Vault</h3>
                </li>
                <li className="project-item">
                    <img src={PasswordGenratorImg}   className="project-image" />
                    <h3 className="project-title">Password Generator</h3>
                </li>
                <li className="project-item">
                    <img src= {StopWatchImg} className="project-image" />
                    <h3 className="project-title">Stop Watch</h3>
                </li>
                <li className="project-item">
                    <img src= {ToDoImage} className="project-image" />
                    <h3 className="project-title">todo</h3>
                </li>
            </ul>
        </div>
    );
};

export default Projects;
