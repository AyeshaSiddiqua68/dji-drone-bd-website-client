import React from 'react';
import {useHistory} from 'react-router-dom';
import { Card, Button, Col, Row } from 'react-bootstrap';
import Zoom from "react-reveal/Zoom";
import Rating from "react-rating";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Drone = ({ drone }) => {
    const history =useHistory();
    const { img, title, desc, price, rating, ratingCount, _id } = drone;

    const { addToCart, AllContexts } = useAuth();
    const { user } = AllContexts;
    const { uid } = user;
    return (

        <Col className="my-3" md={4}>
            <Zoom>
                <Card className="m-2" style={{ minHeight: "480px" }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-muted">{title}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                        <p>
                            {" "}
                            <b>Price: ${price}</b>
                        </p>
                        <div className="mb-3">
                            <Row>
                                <Col>
                                    <Rating
                                        readonly
                                        style={{ color: "goldenrod" }}
                                        initialRating={rating}
                                        emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                        fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                    />{" "}
                                    {rating}
                                </Col>
                                <Col>Total Review: {ratingCount}</Col>
                            </Row>
                        </div>


                        <div className="d-flex">
                            <NavLink to={`/drones/${_id}`} className="w-50 btn btn-primary">
                                View Details
                            </NavLink>
                            <Button onClick={() => {
                                if (uid) {
                                    addToCart(drone)
                                }
                                else{
                                    history.push("/login")
                                }
                            }}

                                className="w-50 ms-1"
                                variant="primary"
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Zoom>
        </Col>
    );
};

export default Drone;