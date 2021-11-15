import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
import image from '../../assets/images/notfound.png'

const NotFound = () => {
    return (
        <div className="my-5">
            <div className="my-5">
                <h1 className="not-found-title">404</h1>
                <h1 className="fw-bold">Page Not Found!</h1>
                <h6 className='fw-bold'>The page you are trying to reach does not exist or has been removed.</h6>
                <Link to='/' ><button className='search-btn'>Back Home</button></Link>
            </div>
            <img src={image} className="w-25" alt="" />

        </div>
    );
};

export default NotFound;