import React, { useEffect, useState } from 'react';

const Overview = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("https://secret-stream-74331.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    return (
        <div>
            <h1 className="text-center bold">Overview</h1>
            <h2>Total Order: {orders.length}</h2>
        </div>
    );
};

export default Overview;