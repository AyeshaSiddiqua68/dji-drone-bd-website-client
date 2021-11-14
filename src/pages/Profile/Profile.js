import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const{AllContexts}=useAuth();
    const {user}=AllContexts;
    const{displayName, photoURL, email}=user;
    return (
        <div>
            <h1 className="text-center">users profile</h1>
            <Container className="mt-2 mb-4">
                <Row>
                    <Col md={4}>
                        <div className="text-center">
                               <img className="rounded-circle"width="100px" src={photoURL} alt=""/>
                        </div>
                        <button className="btn btn-primary mt-4">Edit Profile</button>
                    </Col>
                    <Col md={8}>
                        <h6><strong>Full Name</strong></h6>
                        <h4>{displayName}</h4>
                        <h6><strong>Email Address</strong></h6>
                        <h4>{email}</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;