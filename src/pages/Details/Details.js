import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Details = () => {
    const [drone, setDrone] = useState({});
    const { id } = useParams();
    const { addToCart, AllContexts } = useAuth();
    const { user } = AllContexts;
    const { uid, displayName, email } = user;
    const history = useHistory();

    useEffect(() => {
        fetch(`https://secret-stream-74331.herokuapp.com/drones/${id}`)
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

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        Swal.fire({
            icon: "warning",
            title: "Do you want to confirm your order?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch("https://secret-stream-74331.herokuapp.com/placeorder", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ ...data, ...drone }),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            reset();
                            Swal.fire("Confirmed!", "", "success");
                            history.replace("/dashboard/myorder");
                        }
                    });
            }
        });
    };


    return (
        <div className="my-4">

            {(drone?.title) ? (
                <Container>
                    <Row className="d-flex justify-content-between" >
                        <Col md={6}>
                            <Row className="d-flex flex-column justify-content-center">
                                <Col md={6}>
                                    <img className="img-fluid" src={drone.img} alt="" />
                                </Col>
                                <Col md={6}>
                                    <h4>{drone.title}</h4>
                                    <small>{drone.desc}</small>

                                    <Col>
                                        <h5><b>Price:{drone.price}$</b></h5>

                                        <div className="my-2">
                                            <Rating
                                                readonly
                                                style={{ color: "darkRed" }}
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
                                                variant="dark"
                                            >
                                                Add to Cart
                                            </Button>
                                        </div>

                                    </Col>

                                </Col>
                                {/* <Col>
                                    <div className="text-center">
                                        <img width="200px" className="rounded-circle" src={drone.sellerThumb} alt="" />
                                        <h5>
                                            Seller: {drone.provider}
                                        </h5>
                                        <p className="mb-0">Web Developer</p>
                                    </div>
                                </Col> */}
                            </Row>
                        </Col>


                        <Col md={6}>

                            <Row className="align-items-center">
                                <Col className="my-4" sm={12} md={6}>
                                    <h2 className="text-center " style={{ color: "darkRed" }}>Please confirm order</h2>
                                    <div className="mt-5">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <Row className="mt-3">
                                                <Col sm={12} md={6}>
                                                    <label htmlFor="name">
                                                        <b>Name</b>
                                                    </label>
                                                    <input
                                                        id="name"
                                                        required
                                                        type="text"
                                                        className="form-control"
                                                        {...register("name")}
                                                        defaultValue={displayName}
                                                        placeholder="your name"
                                                    />
                                                </Col>
                                                <Col sm={12} md={6}>
                                                    <label htmlFor="email">
                                                        <b>Email</b>
                                                    </label>
                                                    <input
                                                        id="email"
                                                        required
                                                        type="email"
                                                        readOnly
                                                        defaultValue={email}
                                                        className="form-control"
                                                        {...register("email")}
                                                        placeholder="your email"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="my-4">
                                                <Col>
                                                    <label htmlFor="address">
                                                        <b>Address</b>
                                                    </label>
                                                    <input
                                                        id="address"
                                                        required
                                                        type="text"
                                                        className="form-control"
                                                        {...register("address")}
                                                        placeholder="Enter your address"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="my-4">
                                                <Col>
                                                    <label htmlFor="phone">
                                                        <b>Phone</b>
                                                    </label>
                                                    <input
                                                        id="phone"
                                                        required
                                                        type="number"
                                                        className="form-control"
                                                        {...register("phone")}
                                                        placeholder="Enter your phone"
                                                    />
                                                </Col>
                                            </Row>
                                            <input onClick={() => {
                                                if (uid) {
                                                    addToCart(drone)
                                                }
                                                else {
                                                    history.push("/login")
                                                }
                                            }}
                                                value="Order Now"
                                                className="btn btn-dark"
                                                type="submit"
                                            />
                                        </form>
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