import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    // const navigate = useNavigate();
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();
    }, [user]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }


    return (
        <div className='w-96 mx-auto my-10'>
            <h2 className='text-3xl text-bold text-success'>My Orders:{orders.length}</h2>
            <div className='flex'>
                <div className='w-96 mx-auto my-5'>
                    {
                        orders.map(order => <div key={order._id}>
                            <h5 className='text-xl text-bold text-info mt-5'>Email Address:{order.email}</h5>
                            <h4 className='text-accent text-2xl text-bold'>Selected Item:{order.singleParts} <button className='btn btn-info text-white' onClick={() => handleDelete(order._id)}>Delete</button><button className='btn btn-info text-white mx-5'>Pay</button></h4>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;