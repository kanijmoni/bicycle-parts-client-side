import React from 'react';
import { useForm } from "react-hook-form";

const AddAProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://polar-shelf-14291.herokuapp.com/singleParts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-96 mx-auto my-20'>
            <h2 className='text-2xl mb-5'>Please Add a Product</h2>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 p-2 text-black ' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3  text-black p-2' placeholder='Description' {...register("description")} />
                <textarea className='mb-3  text-black p-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-3 p-2 text-black ' placeholder='price' type="number" {...register("price", { min: 0, max: 990000 })} />
                <input className='mb-3 p-2 text-black ' placeholder='Available Quantity' type="number" {...register("availableQuantity")} />
                <input className='mb-3 p-2 text-black ' placeholder='Minimum Order Quantity' type="number" {...register("minOrderQuantity")} />
                <input className='btn-accent p-2' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddAProduct;