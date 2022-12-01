import React from 'react';
import aboutImg from "./../../assets/photo_5321223098743242272_y.jpg"

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container">
                    <div className="about--title">
                        <h1>ABOUT</h1>
                    </div>
                    <div className="about--content">
                        <div className="about--content--left">
                            <img src={aboutImg} alt=""/>
                        </div>
                        <div className="about--content--right">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequuntur
                                corporis, debitis dolorum ea, eaque earum exercitationem incidunt iste minus modi neque
                                nisi nostrum odit officiis perferendis praesentium quisquam rerum soluta! Accusamus
                                aliquam, architecto autem cumque deleniti dicta, dolorem doloremque dolorum expedita
                                facere maiores nisi perferendis sapiente sint voluptatibus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium consequuntur
                                dicta distinctio earum enim ex, facilis illum inventore iure iusto laborum maxime minus
                                nobis, numquam reprehenderit similique sit soluta tempora tenetur totam velit vero
                                voluptas? Ad earum esse eveniet fugit harum, iste natus praesentium recusandae
                                repudiandae sed tempora tenetur?</p>
                            <button></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default About;