import React from 'react';

import ReviewElement from './ReviewElement';


const ReviewFeed = props => {
    return (
        <>
            {props.reviews.map(review => (
                <ReviewElement review={review} key={review.id}/>
            ))}
        </>
    );
};

export default ReviewFeed;