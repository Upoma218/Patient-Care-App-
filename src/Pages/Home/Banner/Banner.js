import React from 'react';
import { Link } from 'react-router-dom';
import hospital from '../../../Assets/hospital.png';

const Banner = () => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={hospital} className="rounded-lg lg:w-1/2" alt='' />
                <div className='lg:w-1/2 lg:ml-12 text-center'>
                    <h1 className="mb-5 text-5xl font-bold text-info">Welcome To
                    <br /> Patient Care Centre</h1>
                    <p className="py-6 text-2xl">Our patient is our first priority. We always concern about our patient. Our team always try to monitor the patient's condition.</p>
                    <Link to="/addPatient"><button className="btn text-white font-bold btn-info mr-3 mt-6">Add New Patient</button></Link>
                    <Link to="displayPatient"><button className="btn text-white font-bold btn-info btn-outline mt-6">See Patient Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
