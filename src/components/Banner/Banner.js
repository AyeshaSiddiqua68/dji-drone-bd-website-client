import React from 'react';
import './Banner.css'
import { Carousel, Button } from 'react-bootstrap';
import banner1 from '../../assets/images/banner/banner11.jpg'
import banner2 from '../../assets/images/banner/banner17.png'
import banner3 from '../../assets/images/banner/banner2.jpg'
import banner4 from '../../assets/images/banner/banner18.png'
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
                        style={{ height: "450px" }}
                        src={banner2}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <div className="row mx-auto carousel-caption">
                            <div className="align-items-center justify-content-center" >
                                <Bounce left cascade>
                                    <h1 className='carousel-title text-center text-white bold'>MAVIC 2 ADVANCED</h1></Bounce>
                                <Bounce right cascade>
                                    <p className='carousel-p p-4 text-center text-white bold'>Dual Imaging Reimagined</p></Bounce>
                                    <Bounce>
                                    <NavLink to="/drones"  className="rounded-pill fs-5 py-2 px-4"><button className="btn btn-primary px-4 py-2">Explore More</button></NavLink>
                                </Bounce>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "450px" }}
                        src={banner1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="row mx-auto carousel-caption">
                            <div className="align-items-center justify-content-center" >
                                <Bounce left cascade>
                                    <h1 className='carousel-title text-center text-white bold'>DJI ACTION2</h1></Bounce>
                                <Bounce right cascade>
                                    <p className='carousel-p p-4 text-center text-white bold'>More Than Action</p></Bounce>
                                <Bounce>
                                    <NavLink to="/drones"  className="rounded-pill fs-5 py-2 px-4"><button className="btn btn-primary px-4 py-2">Explore More</button></NavLink>
                                </Bounce>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "450px" }}
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="row mx-auto carousel-caption">
                            <div className="align-items-center justify-content-center" >
                                <Bounce left cascade>
                                    <h1 className='carousel-title text-center text-white bold'>DJI RONIN 4D</h1></Bounce>
                                <Bounce right cascade>
                                    <p className='carousel-p p-4 text-center text-white bold'>The Future Is Rolling</p></Bounce>
                                    <Bounce>
                                    <NavLink to="/drones"  className="rounded-pill fs-5 py-2 px-4"><button className="btn btn-primary px-4 py-2">Explore More</button></NavLink>
                                </Bounce>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "450px" }}
                        src={banner4}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <div className="row mx-auto carousel-caption">
                            <div className="align-items-center justify-content-center" >
                                <Bounce left cascade>
                                    <h1 className='carousel-title text-center text-white bold'>AGRAS T30</h1></Bounce>
                                <Bounce right cascade>
                                    <p className='carousel-p p-4 text-center text-white bold'>A New Flagship For Digital Agriculture</p></Bounce>
                                    <Bounce>
                                    <NavLink to="/drones"  className="rounded-pill fs-5 py-2 px-4"><button className="btn btn-primary px-4 py-2">Explore More</button></NavLink>
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