import React from 'react';
import quote from '../../assets/quote.svg';
import clock1 from '../../assets/clock.svg';
import clock2 from '../../assets/clock.svg';
import clock3 from '../../assets/clock.svg';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Robart jhons',
            review: '',
            img: clock1,
            location: 'Dhaka'
        },
        {
            _id: 2,
            name: 'Robart jhons',
            review: '',
            location: 'Dhaka',
            img: clock2
        },
        {
            _id: 3,
            name: 'Robart jhons',
            review: '',
            location: 'Dhaka',
            img: clock3
        }
    ];
    return (
        <section className='my-28 px-12 text-center'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-success font-bold'><i>Testimonials</i></h4>
                    <h2 className='text-3xl text-white'>What our clients say?</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt='' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;