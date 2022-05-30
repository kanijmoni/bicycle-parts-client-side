import React from 'react';
import useParts from '../../hooks/useParts';

const ManageProducts = () => {
    const [parts, setParts] = useParts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/singleParts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = parts.filter(singleParts => singleParts._id !== id);
                    setParts(remaining);
                })
        }
    }

    return (
        <div className='w-96 mx-auto my-10 justify-center'>
            <h2 className='text-2xl text-bold my-5'>Manage The Products</h2>
            {
                parts.map(singleParts => <div key={singleParts._id}>
                    <div className='flex my-10 mx-10 justify-center'>
                        <div>
                            <img className='max-w-xs max-h-72 mx-5' src={singleParts.img} alt='' />
                        </div>
                        <div className='w-80 mx-5'>
                            <p><b>Parts Detail:{singleParts.name}</b></p>
                            <p><b>Price:</b>{singleParts.price}</p>
                            <p><b>Available Quantity:</b>{singleParts.availableQuantity}</p>
                            <button onClick={() => handleDelete(singleParts._id)} className=' btn btn-info mx-2'>Delete</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;