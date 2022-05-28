import React, { useEffect, useState } from 'react';
import SingleParts from './SingleParts';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data));
    })
    // const parts = [
    //     {
    //         _id: 1,
    //         name: 'bicycle',
    //         img: '',
    //         price: '',
    //         description: '',
    //         minOrderQuantity: '',
    //         availableQuantity: ''
    //     },
    //     {
    //         _id: 2,
    //         name: 'bicycle',
    //         img: '',
    //         price: '',
    //         description: '',
    //         minOrderQuantity: '',
    //         availableQuantity: ''
    //     },
    //     {
    //         _id: 3,
    //         name: 'bicycle',
    //         img: '',
    //         price: '',
    //         description: '',
    //         minOrderQuantity: '',
    //         availableQuantity: ''
    //     },
    //     {
    //         _id: 4,
    //         name: 'bicycle',
    //         img: '',
    //         price: '',
    //         description: '',
    //         minOrderQuantity: '',
    //         availableQuantity: ''
    //     },
    //     {
    //         _id: 5,
    //         name: 'bicycle',
    //         img: '',
    //         price: '',
    //         description: '',
    //         minOrderQuantity: '',
    //         availableQuantity: ''
    //     },
    //     {
    //         _id: 6,
    //         name: 'bicycle',
    //         img: '',
    //         price: '',
    //         description: '',
    //         minOrderQuantity: '',
    //         availableQuantity: ''
    //     }
    // ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3><i>Our Products</i></h3>
                <h2 className='text-accent text-xl font-bold uppercase'>Available Parts</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.map(singleParts => <SingleParts key={singleParts._id}
                        singleParts={singleParts}
                    ></SingleParts>)
                }
            </div>
        </div>
    );
};

export default Parts;