import React from "react";
// Uncomment and adjust the import path as needed
// import PrabodhiniTiwariPDF from 'src/Components/Assets/Resume/PrabodhiniTiwari.pdf';
import './Home.css';

const Home = () => {
    return (
        <section className="home-container">
            <div className="leftContent">
                <h2>
                    <span className="Hi">Hi,</span><br />
                    My name is <span className="name">Prabodhini Tiwari,</span>
                </h2>
                <p>And I am a Frontend Developer</p>
                <div className="btn">
                    {/* Uncomment and adjust if using the PDF download */}
                    {/* <button className="download-btn">
                        <a href={PrabodhiniTiwariPDF} download="PrabodhiniTiwari.pdf">Download CV</a>
                    </button> */}
                    <button className="contact-btn">
                        <a href="/#" aria-label="Contact Me">Contact Me</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
