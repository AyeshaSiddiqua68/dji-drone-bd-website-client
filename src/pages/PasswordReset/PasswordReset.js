import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const PasswordReset = () => {
    const { AllContexts } = useAuth();
    const { getEmail, passwordReset, error } = AllContexts;
    return (
        <div className="text-center my-5 w-50 mx-auto">
            <Form onSubmit={passwordReset}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email Address</Form.Label>
                    <p className="text-danger">{error}</p>
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