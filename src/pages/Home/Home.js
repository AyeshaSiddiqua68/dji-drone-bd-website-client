import React from 'react';
import Banner from '../../components/Banner/Banner';
import useAuth from '../../hooks/useAuth';
import Drones from '../Drones/Drones';

const Home = () => {
    const{drones}=useAuth();
    return (
        <div>
            <Banner></Banner>
            <Drones></Drones>
        </div>
    );
};

export default Home;