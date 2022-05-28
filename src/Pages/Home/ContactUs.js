import React from 'react';
import phone from '../../assets/phone.svg';
import InfoCard from './InfoCard';

const ContactUs = () => {
    return (
        <div className='text-center text-white py-14'>
            <div className='font-bold'>
                <h4 className='text-xl'>Contact Us</h4>
                <h2 className='text-3xl'>Stay Connected With Us</h2>
                <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-accent to-success" img={phone}></InfoCard>
            </div>
        </div>
    );
};

export default ContactUs;