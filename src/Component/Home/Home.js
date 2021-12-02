import React from 'react';
import Bannar from './Bannar/Bannar';
import About from '../../Component/About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/ContactForm';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;