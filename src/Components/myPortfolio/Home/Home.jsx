import React from "react";
// Uncomment and adjust the import path as needed
// import PrabodhiniTiwariPDF from 'src/Components/Assets/Resume/PrabodhiniTiwari.pdf';
import './Home.css';

const Home = () => {
    return (
        <section className="home-container">
            <div className="leftContent">
                <h2>
                    <span className="Hi">Hello,</span>
                    I'm <span className="name">Prabodhini Tiwari,</span>
                </h2>
                <p>
                    A frontend developer creating responsive, visually appealing web applications with a focus on modern design and smooth user experiences.
                </p>


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
