import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai"

const Hero = () => {
    return (
        <div>
            <section id="hero">
                <div className="hero">
                    <div className="container">
                        <div className="hero--content">
                            <h1>I'm Niazbekov Ibrahim</h1>
                            <h2>I,m a <a
                                href="https://itvdn.com/ru/specialities/frontend-developer">frontend</a> developer
                            </h2>
                            <button>View my work< AiOutlineArrowRight className="btnIcon"/></button>
                        </div>
                    </div>
                    <div className="hero--nav">
                        <a href="#">HOME</a>
                        <a href="#">ABOUT</a>
                        <a href="#">PORTFOLIO</a>
                        <a href="#">BLOG</a>
                        <a href="#">CONTACT</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;