import React from 'react';
import Banner from '../../components/Banner/Banner';
import HomeComponent from '../../components/Home/HomeComponent';
import useAuth from '../../hooks/useAuth';
import Drones from '../Drones/Drones';


const Home = () => {
    const{drones}=useAuth();
    return (
        <div>
            <Banner></Banner>
            <HomeComponent></HomeComponent>
        </div>
    );
};

export default Home;