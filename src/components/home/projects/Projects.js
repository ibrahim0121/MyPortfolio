import React, {useState} from 'react';
import ProjectCategories from "./ProjectCategories"
import ProjectMenu from "./ProjectMenu"
import item from "./ProjectData"


export const Projects = () => {
    const [itemMenu, setItemMenu] = useState([])
    const [categories, setCategories] = useState([])

    const itemFilter = (category) => {
        const newCategory = item.filter(item => item.category === category)
        setItemMenu(newCategory);

    }


    return (
        <div className="project">
            <div className="container">
                <div className="project--content--title">
                    <h1>
                        project
                    </h1>
                </div>
                <div className="project--content">
                    <ProjectCategories itemFilter ={itemFilter}/>
                    <ProjectMenu itemMenu={itemMenu}/>
                </div>
            </div>
        </div>
    );
};
