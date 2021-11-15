import React from 'react';
import AddReview from '../../components/AddReview/AddReview';
import Banner from '../../components/Banner/Banner';
import HomeComponent from '../../components/Home/HomeComponent';
import RankingReviews from '../../components/RankingReviews';
import Reviews from '../../components/Reviews';
import useAuth from '../../hooks/useAuth';
import ThirdSection from '../ThirdSection/ThirdSection';

const Home = () => {
    const { drones } = useAuth();
    return (
        <div>
            <Banner></Banner>
            <ThirdSection></ThirdSection>
            <HomeComponent></HomeComponent>
            {/* <Reviews></Reviews>           */}
            <RankingReviews></RankingReviews>

        </div>
    );
};

export default Home;