import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AddReview from '../../components/AddReview/AddReview';
import Cart from '../Cart/Cart';
import Payment from '../Payment/Payment';
import Profile from '../Profile/Profile';

const DashBoard = () => {
    const [currentRoute, setCurrentRoute] = useState("Profile");
    function profileHandeler(e) {
        setCurrentRoute(e.target.value);
    }
    function cartHandeler(e) {
        setCurrentRoute(e.target.value);
    }
    function reviewHandeler(e) {
        setCurrentRoute(e.target.value);
    }
    console.log(currentRoute);
    return (
        <div>
            <Row>
                <Col md={3}>
                    <div className="d-flex flex-column my-4">
                        <input className="mx-2 px-4 py-2 bg-primary text-white my-2 " onClick={profileHandeler} type="button" value="Profile" />
                        <input className="mx-2 px-4 py-2 bg-primary text-white my-2 " onClick={cartHandeler} type="button" value="Orders" />
                        <input className="mx-2 px-4 py-2 bg-primary text-white my-2 " onClick={reviewHandeler} type="button" value="Review" />
                        <input className="mx-2 px-4 py-2 bg-primary text-white my-2 " onClick={reviewHandeler} type="button" value="Payment" />
                    </div>
                </Col>
                <Col md={9}>
                    {
                        (currentRoute === "Profile" && <Profile></Profile>) ||
                        (currentRoute === "Orders" && <Cart></Cart>) ||
                        (currentRoute === "Review" && <AddReview></AddReview>) ||
                        (currentRoute === "Payment" && <Payment></Payment>)
                    }
                </Col>
            </Row>


        </div>
    );
};

export default DashBoard;