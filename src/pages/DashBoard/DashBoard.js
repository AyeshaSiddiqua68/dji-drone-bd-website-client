import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';

const DashBoard = () => {
    const [currentRoute, setCurrentRoute] = useState("Profile");
    function profileHandeler(e) {
        setCurrentRoute(e.target.value);
    }
    function cartHandeler(e) {
        setCurrentRoute(e.target.value);
    }
    console.log(currentRoute);
    return (
        <div>
            <div className="d-flex justify-content-center my-2">
                <input onClick={profileHandeler} type="button" value="Profile" />
                <input onClick={cartHandeler} type="button" value="Cart" />
            </div>
            {
                (currentRoute === "Profile" && <Profile></Profile>) ||
                (currentRoute === "Cart" && <Cart></Cart>)
            }
        </div>
    );
};

export default DashBoard;