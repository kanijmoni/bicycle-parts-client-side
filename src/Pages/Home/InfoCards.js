import React from 'react';

const InfoCards = ({ img, cardTitle, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl text-white ${bgClass}`}>
            <figure className='pl-5 pt-5'><img src={img} alt="Album" /></figure>
            <div className="card-body">{cardTitle}
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCards;