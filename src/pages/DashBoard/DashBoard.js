import React, { useState } from 'react';
import AddReview from '../../components/AddReview/AddReview';
import Reviews from '../../components/Reviews';
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
    function reviewHandeler(e){
        setCurrentRoute(e.target.value);
    }
    console.log(currentRoute);
    return (
        <div>
            <div className="d-flex justify-content-center my-2">
                <input onClick={profileHandeler} type="button" value="Profile" />
                <input onClick={cartHandeler} type="button" value="Cart" />
                <input onClick={reviewHandeler} type="button" value="Review" />
            </div>
            {
                (currentRoute === "Profile" && <Profile></Profile>) ||
                (currentRoute === "Cart" && <Cart></Cart>) ||
                (currentRoute === "Review" && <AddReview></AddReview>)
            }
        </div>
    );
};

export default DashBoard;