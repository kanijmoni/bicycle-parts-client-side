import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/clock.svg';
import marker from '../../assets/marker.svg';
import phone from '../../assets/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-success to-accent" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Location" bgClass="bg-success" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-accent to-success" img={phone}></InfoCard>
        </div>
    );
};

export default Info;