import React from 'react';
import InfoCards from './InfoCards';
import clock from '../../assets/clock.svg';
import phone from '../../assets/phone.svg';
import marker from '../../assets/marker.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 my-20'>
            <InfoCards cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-success to-accent" img={clock}></InfoCards>
            <InfoCards cardTitle="Our Location" bgClass="bg-success" img={marker}></InfoCards>
            <InfoCards cardTitle="Contact Us" bgClass="bg-gradient-to-r from-accent to-success" img={phone}></InfoCards>
        </div>
    );
};

export default Info;