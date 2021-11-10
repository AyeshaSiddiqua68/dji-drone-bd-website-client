import React from 'react';
import './Banner.css'
import { Carousel, Button } from 'react-bootstrap';
import banner1 from '../../assets/images/banner/banner3.jpg'
import banner2 from '../../assets/images/banner/banner4.jpg'
import banner3 from '../../assets/images/banner/banner5.jpg'
import Bounce from "react-reveal/Bounce";
import { NavLink } from 'react-router-dom';

//home page banner part
const Banner = () => {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "550px" }}
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="row mx-auto carousel-caption">
                            <div className="align-items-center justify-content-center" >
                                <Bounce left cascade>
                                    <h1 className='carousel-title text-center'>MAVIC 2  ENTERPRISE ADVANCED</h1></Bounce>
                                <Bounce right cascade>
                                    <p className='carousel-p p-4 text-center'>Dual Imaging Reimagined</p></Bounce>
                                <Bounce>
                                    <NavLink to="/exploredrones"  className="rounded-pill fs-5 py-2 px-4">Explore More</NavLink>
                                </Bounce>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "550px" }}
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="row mx-auto carousel-caption">
                            <div className="align-items-center justify-content-center" >
                                <Bounce left cascade>
                                    <h1 className='carousel-title text-center'>MAVIC 2  ENTERPRISE ADVANCED</h1></Bounce>
                                <Bounce right cascade>
                                    <p className='carousel-p p-4 text-center'>Dual Imaging Reimagined</p></Bounce>
                                    <Bounce>
                                    <NavLink to="/exploredrones"  className="rounded-pill fs-5 py-2 px-4">Explore More</NavLink>
                                </Bounce>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "550px" }}
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="row mx-auto carousel-caption">
                            <div className="align-items-center justify-content-center" >
                                <Bounce left cascade>
                                    <h1 className='carousel-title text-center'>MAVIC 2  ENTERPRISE ADVANCED</h1></Bounce>
                                <Bounce right cascade>
                                    <p className='carousel-p p-4 text-center'>Dual Imaging Reimagined</p></Bounce>
                                    <Bounce>
                                    <NavLink to="/exploredrones"  className="rounded-pill fs-5 py-2 px-4">Explore More</NavLink>
                                </Bounce>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;