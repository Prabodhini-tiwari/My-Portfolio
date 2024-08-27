import React from "react";
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
                <div className='portfolio'>Prabodhini's Portfolio</div>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#AboutAndSkills">About</a>
                    </li>
                    
                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#experience">Experience</a>
                    </li>

                    <li>
                        <a href="#education">Education</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MobileNav;
