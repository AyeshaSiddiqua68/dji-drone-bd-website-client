import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { AllContexts } = useAuth();
    const { user } = AllContexts;
    const { displayName, photoURL, email } = user;
    return (
        <div className="my-2 bg-light p-2">
            <h1 className="text-center fw-bold">User's Profile</h1>
            <Container className="mt-2 mb-4">
                <Row>
                    <Col md={4}>
                        <div className="text-center">
                            <img className="rounded-circle" width="80px" src={photoURL} alt="" />
                        </div>
                        <button className="btn btn-primary mt-2">Edit Profile</button>
                    </Col>
                    <Col md={8}>
                        <h6><strong>Full Name</strong></h6>
                        <h4>{displayName}</h4>
                        <h6><strong>Email Address</strong></h6>
                        <h5>{email}</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;