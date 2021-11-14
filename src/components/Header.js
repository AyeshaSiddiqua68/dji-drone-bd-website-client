import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import logo from '../assets/images/footer.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const { AllContexts, foundedDrone } = useAuth();
    const { user, logOut } = AllContexts;
    const { displayName, photoURL, email } = user;
    return (
        <div className="sticky-top">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img width="80px" src={logo} alt="" />{" "}
                        <span className="fw-bold text-white">Drone BD</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={NavLink} to="/drones">Drones</Nav.Link>

                            {!displayName ? (<>
                                <Nav.Link as={NavLink} to="/signup">SignUp</Nav.Link>
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link></>) : (

                                <>
                                    <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>


                                    <NavDropdown title={
                                        <img style={{ width: '42px', borderRadius: "50%" }} src={photoURL} alt="" />
                                    } >
                                        <div className="text-center">
                                            <h6>{displayName}</h6>
                                            <p className="m-0">{email}</p>
                                            <button onClick={logOut} className="btn btn-primary">Sign Out</button>
                                        </div>

                                    </NavDropdown>
                                </>
                            )}



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;