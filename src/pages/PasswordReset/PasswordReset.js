import React from 'react';
import { Form,Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const PasswordReset = () => {
    const{getEmail,passwordReset}=useAuth();
    return (
        <div className="text-center my-5 w-50 mx-auto">
            <Form onSubmit={passwordReset}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email Address</Form.Label>
                    <Form.Control onBlur={getEmail} type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </div>
    );
};

export default PasswordReset;