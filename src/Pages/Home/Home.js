import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContuctUs from './ContuctUs';
import Info from './Info';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Info></Info>
            <BusinessSummary></BusinessSummary>
            <ContuctUs></ContuctUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;