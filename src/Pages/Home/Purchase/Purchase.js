import React from 'react';
import Footer from '../../Shared/Footer';

const Purchase = ({ singleParts }) => {

    const parts = [
        {
            _id: 1,
            name: 'bicycle',
            img: '',
            price: '',
            description: '',
            minOrderQuantity: '',
            availableQuantity: ''
        },
        {
            _id: 2,
            name: 'bicycle',
            img: '',
            price: '',
            description: '',
            minOrderQuantity: '',
            availableQuantity: ''
        },
        {
            _id: 3,
            name: 'bicycle',
            img: '',
            price: '',
            description: '',
            minOrderQuantity: '',
            availableQuantity: ''
        },
        {
            _id: 4,
            name: 'bicycle',
            img: '',
            price: '',
            description: '',
            minOrderQuantity: '',
            availableQuantity: ''
        },
        {
            _id: 5,
            name: 'bicycle',
            img: '',
            price: '',
            description: '',
            minOrderQuantity: '',
            availableQuantity: ''
        },
        {
            _id: 6,
            name: 'bicycle',
            img: '',
            price: '',
            description: '',
            minOrderQuantity: '',
            availableQuantity: ''
        }
    ];
    const handlePurchase = event => {
        event.preventDefault();
    }

    return (
        <div>
            <div className='text-center'>
                <div className='text-center'>
                    <div>
                        <img className='mx-5' src={parts.img} alt='' />
                    </div>
                    <div>
                        <p><b>Parts Detail:{parts.name}</b></p>
                        <p>Price:{parts.price}</p>
                        <p>Description:{parts.description}</p>
                        <p>{parts.quantity}</p>
                        <p>Supplier-Name:{parts.supplier}</p>
                        <div className='flex'>
                            <button className='mx-2 btn btn-info'>Delivered</button>
                            <form><input className='mx-2 btn btn-info' type='number' name='number' placeholder='Restock' /></form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h3 className='text-primary mt-5 text-3xl '><b>Please Order:{parts.name}</b></h3>
                <form onSubmit={handlePurchase}>
                    <input className='w-100 mb-3' type="text" value='' name='name' placeholder='name' required readOnly disabled />
                    <br />
                    <input className='w-100 mb-3' type="email" value='' name='email' placeholder='Email' required readOnly disabled />
                    <br />
                    <input className='w-100 mb-3' type="text" value={parts.name} name='product' placeholder='Product Name' required readOnly disabled />
                    <br />
                    <input className='w-100 mb-3' type="text" name='address' placeholder='Address' autoComplete='off' required />
                    <br />
                    <input className='w-100 mb-3' type="text" name='phone' placeholder='phone' autoComplete='off' required />
                    <br />
                    <input onSubmit={handlePurchase} className='btn btn-primary' type='submit' value="Place order" />
                </form>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;