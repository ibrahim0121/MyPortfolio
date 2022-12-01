import React from 'react';
import data from "./data"

const Skills = () => {
    console.log(data)
    return (
        <section id="skills">
            <div className="container">
                <div className="skills">
                    <div className="skills--left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at consequatur, culpa deleniti
                        eius est iure, laboriosam optio porro quo sapiente ut? Architecto dolorem expedita harum id
                        impedit iusto rem?
                    </div>
                    <div className="skills--right">
                        {/*{data?.map((el) => {*/}
                        {/*    {console.log(el)}*/}
                        {/*    <div key={el.id}>*/}
                        {/*        <span>{el.name}</span>*/}
                        {/*    </div>*/}
                        {/*})}*/}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;