import React from 'react';
import Projects from './Projects';
import IntroBar from './IntroBar';
import About from './About';
import EstimateBar from './EstimateBar';
import Estimate from './Estimate';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return (
        <div>
            <Estimate />
            <About />
            <EstimateBar />
            <Projects />
            <EstimateBar />
            <IntroBar />
        </div>
    );
};

export default Home;