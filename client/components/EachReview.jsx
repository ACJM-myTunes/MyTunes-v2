import React from 'react';

const EachReview = (props) => {
    return (
        <>
        <div>{props.title}</div>
        <div>{props.rating}</div>
        <div>{props.review}</div>
        </>
    )
}

export default EachReview; 