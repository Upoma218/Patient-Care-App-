import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/hero.png';

const Banner = () => {

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${logo})` }}>
            <div className="hero-overlay bg-opacity-80 bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-info">Welcome To Patient Care Centre</h1>
                    <Link to="/addPatient"><button className="btn text-white font-bold btn-info mr-3 mt-6">Add New Patient</button></Link>
                    <Link to="displayPatient"><button className="btn text-white font-bold btn-info btn-outline mt-6">See Patient Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
