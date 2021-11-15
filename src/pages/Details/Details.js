import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { Button } from 'react-bootstrap'

const Details = () => {
    const [drone, setDrone] = useState({});
    const { id } = useParams();
    const { addToCart, AllContexts } = useAuth();
    const { user } = AllContexts;
    const { uid } = user;
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/drones/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data?._id) {
                    setDrone(data);
                }
                else {
                    alert("Something wrong!")
                }

            })
    }, [id]);
    // const { img, title, desc, price, rating, ratingCount, provider, sellerThumb } = selectedDrone;

    return (
        <div className="my-4">

            {(drone?.title) ? (
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md={6}>
                            <img className="img-fluid" src={drone.img} alt="" />
                        </Col>
                        <Col className="d-flex justify-content-center flex-column" md={6}>
                            <h2>{drone.title}</h2>
                            <h5>{drone.desc}</h5>
                            <Row>
                                <Col >
                                    <h2>Price:{drone.price}$</h2>

                                    <div className="my-2">
                                        <Rating
                                            readonly
                                            style={{ color: "goldenrod" }}
                                            initialRating={drone.rating}
                                            emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                            fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                        />{" "}
                                        {drone.rating}
                                        <p className="mb-0">Total Review: {drone.ratingCount}</p>
                                        <Button
                                            onClick={() => {
                                                if (uid) {
                                                    addToCart(drone)
                                                }
                                                else {
                                                    history.push("/login")
                                                }
                                            }}

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
                                        <img width="200px" className="rounded-circle" src={drone.sellerThumb} alt="" />
                                        <h5>
                                            Seller: {drone.provider}
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