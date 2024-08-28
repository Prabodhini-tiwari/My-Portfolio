import React, { useState } from 'react';
import MobileNav from './MobileNav/MobileNav';
import './Navbar.css';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="desktop-nav">
                <div className='portfolio'>Prabodhini's Portfolio</div>
                <div className='options'>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Experience">Experience</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#Contacts">Contacts</a></li>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className={"material-symbols-outlined"}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
