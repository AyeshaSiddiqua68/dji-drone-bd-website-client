import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { Button } from 'react-bootstrap'

const Details = () => {
    const { key } = useParams();
    const { drones,addToCart } = useAuth();

    const selectedDrone = drones.find((drone) => drone.key === Number(key));

    // const { img, title, desc, price, rating, ratingCount, provider, sellerThumb } = selectedDrone;

    return (
        <div className="my-4">

            {(selectedDrone?.title) ? (
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md={6}>
                            <img className="img-fluid" src={selectedDrone.img} alt="" />
                        </Col>
                        <Col className="d-flex justify-content-center flex-column" md={6}>
                            <h2>{selectedDrone.title}</h2>
                            <h5>{selectedDrone.desc}</h5>
                            <Row>
                                <Col >
                                    <h2>Price:{selectedDrone.price}$</h2>

                                    <div className="my-2">
                                        <Rating
                                            readonly
                                            style={{ color: "goldenrod" }}
                                            initialRating={selectedDrone.rating}
                                            emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                            fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                        />{" "}
                                        {selectedDrone.rating}
                                        <p className="mb-0">Total Review: {selectedDrone.ratingCount}</p>
                                        <Button
                                         onClick={()=>{addToCart(selectedDrone)}}

                                            className="w-50 ms-1"
                                            variant="primary"
                                        >
                                            Add to Cart
                                        </Button>
                                    </div>
                                    <Col>
                                        <Col>

                                        </Col>
                                    </Col>
                                </Col>
                                <Col>
                                    <div className="text-center">
                                        <img width="200px" className="rounded-circle" src={selectedDrone.sellerThumb} alt="" />
                                        <h5>
                                            Seller: {selectedDrone.provider}
                                        </h5>
                                        <p className="mb-0">Web Developer</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            ) : <h1 className="text-center my-5 p-5">Nothing found</h1>
            }

        </div>
    );
};

export default Details;