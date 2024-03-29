import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import topBannerImg from '../../Assets/IntroBar.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../PagesCss/IntroBar.css';


const IntroBar = () => {
    return (
        <section className="mt-5 container container-introbar" >
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div>
                            <h1 style={{ fontSize: '55px' }} >Professional <br /> Painting Services</h1>
                            <p style={{ fontSize: '25px' }}className="mt-5" > <span> <FontAwesomeIcon color="red" icon={faCheck} /> Special Offer</span> <span className="ml-md-4 d-md-inline d-block" > <FontAwesomeIcon color="red" icon={faCheck} /> Professional Worker</span> </p>
                            <p style={{ fontSize: '25px' }}className="mt-4" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, praesentium.</p>
                            <Link to="/services" className="btn btn-danger mt-4">Get Started</Link>
                        </div>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-5">
                        <div className="text-center" >
                            <img className="w-100" style={{ height: '450px' }} src={topBannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroBar;