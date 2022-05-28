import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
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
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;