import React, { useEffect, useState } from 'react';
import SingleParts from './SingleParts';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://polar-shelf-14291.herokuapp.com/singleParts')
            .then(res => res.json())
            .then(data => setParts(data));
    })
    return (
        <div className='my-15 px-12'>
            <div className='text-center my-5'>
                <h3><i>Our Products</i></h3>
                <h2 className='text-accent text-xl font-bold uppercase'>Available Parts</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.slice(0, 6).map(singleParts => <SingleParts key={singleParts._id}
                        singleParts={singleParts}
                    ></SingleParts>)
                }
            </div>
        </div>
    );
};

export default Parts;