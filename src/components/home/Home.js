import React from 'react';
import Layout from "../Layout";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skills/skills";
import {Projects} from "./projects/Projects";

const Home = () => {
    return (
        <Layout>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
        </Layout>
    );
};

export default Home;