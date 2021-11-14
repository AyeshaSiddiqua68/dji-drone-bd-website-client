import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
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
                        <Col className="text-center" md={4}>
                            <h4>Total {foundedDrone.length} course selected</h4>
                            <h6>Total Price: {totalCost.toFixed(2)} $</h6>

                            <button onClick={() => {
                                fetch(`https://secret-stream-74331.herokuapp.com/purchase/${uid}`, {
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
                                    <Row className="my-2 bg-info" key={_id}>
                                        <Col sm={5}>
                                            <img className="img-fluid" src={img} alt="" />
                                        </Col>
                                        <Col sm={7}>
                                            <h5>{title}</h5>
                                            <p className="mb-0">{desc}</p>
                                            <h4>Price: {price}</h4>
                                            <Row>
                                                <Col sm={4}>
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
                                                </Col>
                                                <Col sm={8}>
                                                    <div className="d-flex">
                                                        <NavLink
                                                            to={`/courses/${_id}`}
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
                                        </Col>
                                    </Row>
                                );
                            })}
                        </Col>
                    </Row>
                ) : (
                    <div className="text-center my-5 py-5">
                        <h1>No Course Selected!</h1>
                    </div>
                )}
            </Container>
        </div>
        // <div className="my-4">
        //     {totalCost ? (
        //         <Container>
        //             <Row>
        //                 <Col md={8}>
        //                     {foundedDrone.map((course) => (
        //                         <Row className="bg-info my-3">
        //                             <Col
        //                                 className="p-0 d-flex align-items-center justify-content-center"
        //                                 md={4}
        //                             >
        //                                 <img width="100%" src={course.img} alt="" />
        //                             </Col>
        //                             <Col className="py-2">
        //                                 <h6 md={8}>{course.title}</h6>
        //                                 <p className="m-0">{course.desc}</p>
        //                                 <Row>
        //                                     <Col>
        //                                         <Row>
        //                                             <h6 className="my-1">Price:${course.price}</h6>
        //                                         </Row>
        //                                         <Row>
        //                                             <Col>
        //                                                 <Rating
        //                                                     readonly
        //                                                     style={{ color: "goldenrod" }}
        //                                                     initialRating={course.rating}
        //                                                     emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
        //                                                     fullSymbol={<FontAwesomeIcon icon={fullStar} />}
        //                                                 />{" "}
        //                                                 {course.rating}
        //                                                 <p className="m-0">
        //                                                     Total Review: {course.ratingCount}
        //                                                 </p>
        //                                             </Col>
        //                                             <Col className="d-flex align-items-center">
        //                                                 <NavLink
        //                                                     to={`/courses/${course.key}`}
        //                                                     className="w-50 btn py-2 btn-primary"
        //                                                 >
        //                                                     View Details
        //                                                 </NavLink>
        //                                                 <Button
        //                                                     onClick={() => {
        //                                                         removeItem(course.key);
        //                                                     }}
        //                                                     className="btn py-2 ms-1 w-50 btn-primary"
        //                                                 >
        //                                                     Remove
        //                                                 </Button>
        //                                             </Col>
        //                                         </Row>
        //                                     </Col>
        //                                 </Row>
        //                             </Col>
        //                         </Row>
        //                     ))}
        //                 </Col>
        //                 <Col
        //                     className="position-fixed"
        //                     style={{ top: "100px", right: "30px" }}
        //                     md={4}
        //                 >
        //                     <div className="text-center my-2">
        //                         <h3>Total {foundedDrone.length} Item Selected</h3>
        //                         <h4>Total Cost: {totalCost.toFixed(2)}$</h4>
        //                         <button
        //                             onClick={() => {
        //                                 alert("Thanks for purchasing!");
        //                                 localStorage.setItem('cart', JSON.stringify([]));
        //                                 setFoundedDrone([]
        //                                 );
        //                                 history.push("/home");
        //                             }}
        //                             className="btn btn-primary"
        //                         >
        //                             Check Out
        //                         </button>
        //                     </div>
        //                 </Col>
        //             </Row>
        //         </Container>
        //     ) : (
        //         <div className="text-center my-5 py-5">
        //             <h1>No Item Selected!</h1>
        //         </div>
        //     )}
        // </div>
    );
};

export default Cart;