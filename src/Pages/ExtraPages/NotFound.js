import React from 'react';
import notFound from '../../assets/404.jpg';

const NotFound = () => {
    return (
        <div className='w-96 mx-auto my-20'>
            <h2 className='text-xl'> The Page Is Not Found</h2>
            <img src={notFound} alt=""></img>
        </div>
    );
};

export default NotFound;