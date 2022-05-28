import React from 'react';

const SingleParts = ({ singleParts }) => {
    const { name, img, price, description, minOrderQuantity, availableQuantity } = singleParts;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl  px-12 text-white bg-gradient-to-r from-success to-accent">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price:{price}</p>
                <p>Short Description:{description}</p>
                <p>Available Quantity:{availableQuantity}</p>
                <p>Minimum Order Quantity:{minOrderQuantity}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-accent uppercase font-bold ">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default SingleParts;