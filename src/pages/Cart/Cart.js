import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from "react-rating";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from '../../hooks/useAuth';
import { NavLink, } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Cart = () => {
    const history = useHistory();
    const { foundedDrone, removeItem, setFoundedDrone, AllContexts } = useAuth();
    const { user } = AllContexts;
    const { uid } = user;
    const totalCost = foundedDrone.reduce(
        (total, drone) => total + drone.price,
        0
    );
    return (
        <div className="my-4">
            <Container>
                {foundedDrone.length ? (
                    <Row>
                        <Col className="text-center my-4" md={4}>
                            <h4 className="fw-bold">Total {foundedDrone.length} product selected</h4>
                            <h6>Total Price: {totalCost.toFixed(2)} $</h6>

                            <button onClick={() => {
                                fetch(`http://localhost:5000/purchase/${uid}`, {
                                    method: "delete"
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data.deletedCount > 0) {
                                            alert("Thanks for purchasing!");

                                            setFoundedDrone([]
                                            );
                                            history.push("/home");
                                        }
                                    })

                            }}
                                className="btn btn-primary"
                            >
                                Check Out
                            </button>


                        </Col>
                        <Col className="" md={8}>
                            {foundedDrone.map((drone) => {
                                const { img, _id, title, desc, rating, ratingCount, price } =
                                    drone;

                                return (
                                    <Row className="my-2 border border-primary rounded-2 p-4" key={_id}>
                                        <Col sm={4} >
                                            <img className="img-fluid" src={img} alt="" />
                                        </Col>
                                        <Col sm={8}  >
                                            <h5>{title}</h5>
                                            <p className="mb-0">{desc}</p>
                                            <h4>Price: ${price}</h4>
                                            <Col>
                                                <Rating
                                                    initialRating={rating}
                                                    readonly
                                                    emptySymbol={
                                                        <FontAwesomeIcon
                                                            className="text-warning"
                                                            icon={emptyStar}
                                                        />
                                                    }
                                                    fullSymbol={
                                                        <FontAwesomeIcon
                                                            className="text-warning"
                                                            icon={fullStar}
                                                        />
                                                    }
                                                />
                                                <span>{rating}</span>
                                            </Col>
                                            <Col>Total review {ratingCount}</Col>

                                            <div className="d-flex">
                                                <NavLink
                                                    to={`/drones/${_id}`}
                                                    className="btn btn-primary w-100 me-1"
                                                >
                                                    View Details
                                                </NavLink>

                                                <button
                                                    onClick={() => removeItem(_id)}
                                                    className="btn btn-primary  w-100"
                                                >
                                                    Remove
                                                </button>
                                            </div>

                                        </Col>
                                    </Row>
                                );
                            })}
                        </Col>
                    </Row>
                ) : (
                    <div className="text-center my-5 py-5">
                        <h1 className="text-danger">No Puchased Product!</h1>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Cart;