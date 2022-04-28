import React from 'react';

const MyReviewsEach = (props) => {
    return (
        <>
        <div>{props.title}</div>
        <div>{props.rating}</div>
        <div>{props.review}</div>
        </>
    )
}

export default MyReviewsEach; 