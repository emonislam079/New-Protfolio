import React from 'react';
import Bannar from './Bannar/Bannar';
import About from '../../Component/About/About';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;