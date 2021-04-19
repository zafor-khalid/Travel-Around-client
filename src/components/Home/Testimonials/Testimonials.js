import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import reviewerOne from '../../Images/review-1.jpg'
import reviewerTwo from '../../Images/review-2.jpg'
import reviewerThree from '../../Images/review-3.jpg'
import { Carousel } from 'react-bootstrap';

const Testimonials = () => {
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/allreviews')
            .then(res => res.json())
            .then(data => {
                setAllReviews(data)

            })
    }, [])

    const count = 0;

    return (
        <div>
            <h1 className='text-center'>Reviews</h1>

            <Carousel indicators={false} interval={300000} >
                {
                    allReviews.map((review, idx) => (

                        <Carousel.Item>
                            <div className=''>

                                <div className='d-flex justify-content-center flex-wrap m-5'>
                                    <TestimonialCard img={review.img} name={review.name} description={review.reviewDescription} rating={review.reviewRating} profession={review.profession} />

                                </div>
                            </div>
                        </Carousel.Item>

                    ))
                }

            </Carousel>
        </div>

    );
};

export default Testimonials;