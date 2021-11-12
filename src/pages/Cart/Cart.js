import React from 'react';
import useAuth from '../../hooks/useAuth';

const Cart = () => {
    const{}=useAuth();
    return (
        <div>
            <h2>cart</h2>
        </div>
    );
};

export default Cart;