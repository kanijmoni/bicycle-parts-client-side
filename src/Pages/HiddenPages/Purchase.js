import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const Purchase = () => {
    const { singlePartsId } = useParams();
    const [singleParts, setSingleParts] = useState({});
    const { register } = useForm();
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user)
    }

    useEffect(() => {
        const url = `https://polar-shelf-14291.herokuapp.com/singleParts/${singlePartsId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleParts(data));
    }, [singlePartsId]);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            singleParts: singleParts.name,
            singlePartsId: singlePartsId,
            address: event.target.address?.value,
            phone: event.target.phone?.value
        }
        axios.post('https://polar-shelf-14291.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div>
            <div className='flex my-10 mx-10 justify-center'>
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
            <div>
                <h3 className='w-96 mx-auto'>Please Order:{singleParts.name}</h3>
                <form onSubmit={handlePlaceOrder} className='w-96 mx-auto' >
                    <input className='w-96 mx-auto my-2' type="text" value={user?.displayName} name='name' placeholder='name' required readOnly disabled />
                    <br />
                    <input className='w-96 mx-auto my-2' type="email" value={user?.email} name='email' placeholder='Email' required readOnly disabled />
                    <br />
                    <input className='w-96 mx-auto my-2' type="text" value={singleParts.name} name='product' placeholder='Product Name' required readOnly disabled />
                    <input className='w-96 mx-auto my-2' type="number" name='order quantity' placeholder='Quantity' {...register("quantity", { min: 0, max: 990000 })} required />
                    <br />
                    <input className='w-96 mx-auto my-2' type="text" name='address' placeholder='Address' autoComplete='off' required />
                    <br />
                    <input className='w-96 mx-auto my-2' type="text" name='phone' placeholder='phone' autoComplete='off' required />
                    <br />
                    <input className='btn btn-primary' type='submit' value="Submit" />
                </form>
            </div>
        </div >
    );
};

export default Purchase;