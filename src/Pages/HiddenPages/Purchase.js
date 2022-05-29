import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { singlePartsId } = useParams();
    const [singleParts, setsingleParts] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/singleParts/${singlePartsId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setsingleParts(data));
    }, [singlePartsId]);

    return (
        <div className='flex my-5 text-center'>
            <div>
                <img className='mx-5' src={singleParts.img} alt='' />
            </div>
            <div>
                <p><b>Parts Detail:{singleParts.name}</b></p>
                <p>Price:{singleParts.price}</p>
                <p>Description:{singleParts.description}</p>
                <p>{singleParts.quantity}</p>
                <p>Supplier-Name:{singleParts.supplier}</p>
                <div className='flex'>
                    <button className=' btn btn-info mx-2'>Delivered</button>
                    <form><input className=' btn btn-info mx-2' type='number' name='number' placeholder='Restock' /></form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;