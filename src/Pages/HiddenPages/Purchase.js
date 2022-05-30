import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { singlePartsId } = useParams();
    const [singleParts, setSingleParts] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/singleParts/${singlePartsId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleParts(data));
    }, [singlePartsId]);

    // const handlePlaceOrder = event => {
    //     event.preventDefault();
    //     const order = {
    //         email: user.email,
    //         product: singleParts.name,
    //         productId: singlePartsId,
    //         address: event.target.address?.value,
    //         phone: event.target.phone?.value
    //     }

    return (
        <div>
            <div className='flex my-20 mx-10 justify-center'>
                <div>
                    <img className='max-w-xs max-h-72 mx-5' src={singleParts.img} alt='' />
                </div>
                <div className='w-80 mx-5'>
                    <p><b>Parts Detail:{singleParts.name}</b></p>
                    <p><b>Price:</b>{singleParts.price}</p>
                    <p><b>Description:</b>{singleParts.description}</p>
                    <p><b>Available Quantity:</b>{singleParts.availableQuantity}</p>
                    <p><b>Minimum Order Quantity:</b>{singleParts.minOrderQuantity}</p>
                    <div className='flex my-5'>
                        <button className=' btn btn-info mx-2'>Place Order</button>
                        <form><input className=' btn btn-info mx-2' type='number' name='number' placeholder='Restock' /></form>
                    </div>
                </div>
            </div>
            {/* <div>
                    <h3 className='text-primary text-center mt-5'>Please Order:{singleParts.name}</h3>
                    <form onSubmit={handlePlaceOrder}>
                        <input className='w-full my-3' type="text" value={user?.displayName} name='name' placeholder='name' required readOnly disabled />
                        <br />
                        <input className='w-full my-2' type="email" value={user?.email} name='email' placeholder='Email' required readOnly disabled />
                        <br />
                        <input className='w-full mb-3' type="text" value={singleParts.name} name='product' placeholder='Product Name' required readOnly disabled />
                        <br />
                        <input className='w-full mb-3' type="text" name='address' placeholder='Address' autoComplete='off' required />
                        <br />
                        <input className='w-full mb-3' type="text" name='phone' placeholder='phone' autoComplete='off' required />
                        <br />
                        <input className='btn btn-primary' type='submit' value="Submit" />
                    </form>
                </div> */}
        </div >
    );
};

export default Purchase;