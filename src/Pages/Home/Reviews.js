import React from 'react';
import Review from './Review';
import people1 from '../../assets/people1.png';
import people2 from '../../assets/people2.png';
import people3 from '../../assets/people3.png';
import quote from '../../assets/quote.svg';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Robart jhons',
            review: '',
            img: people1,
            location: 'Dhaka'
        },
        {
            _id: 2,
            name: 'Robart jhons',
            review: '',
            location: 'Dhaka',
            img: people2
        },
        {
            _id: 3,
            name: 'Robart jhons',
            review: '',
            location: 'Dhaka',
            img: people3
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