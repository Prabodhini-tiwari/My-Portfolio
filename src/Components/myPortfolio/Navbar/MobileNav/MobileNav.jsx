import React from "react";
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <div className='portfolio'>Prabodhini's Portfolio</div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contacts">Contacts</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MobileNav;
