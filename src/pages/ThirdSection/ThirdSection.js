import React from 'react';
import './ThirdSection.css'
import Bounce from "react-reveal/Bounce";
import image1 from '../../assets/images/collection/img1.jpg'
import image2 from '../../assets/images/collection/img2.jpg'
import image3 from '../../assets/images/collection/img3.jpg'
import image4 from '../../assets/images/collection/img4.jpg'
import { Col, Container, Row } from 'react-bootstrap';

const ThirdSection = () => {
    return (
        <Container
            className="collections my-5 mx-auto">
            <Bounce bottom cascade>
                <h1 className="text-center feature">Outstanding Products</h1>
            </Bounce>
            <p
                style={{ maxWidth: "650px" }}
                className="text-center mb-2 mx-auto mt-3"
            >
                <Bounce>
                    Drones are becoming critical tools for law enforcement agencies, enabling greater safety, quicker response, and better decisions.
                </Bounce>
            </p>
            <Row className="mx-0">
                <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
                    <div className="img">
                        <img className="img-fluid ms-0 ps-0" src={image1} alt="" />
                    </div>
                </Col>
                <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
                    <div className="img img-fluid">
                        <img className="img-fluid ms-0 ps-0" src={image2} alt="" />
                    </div>
                </Col>
                <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
                    <div className="img img-fluid">
                        <img className="img-fluid ms-0 ps-0" src={image3} alt="" />
                    </div>
                </Col>
                <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
                    <div className="img img-fluid">
                        <img className="img-fluid ms-0 ps-0" src={image2} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default ThirdSection;