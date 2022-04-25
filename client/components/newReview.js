import React from 'react';
import '../scss/newReview.scss';

const NewReview = (props) => {
    
    const handleClick = () => {
        props.showReviewForm()
        console.log("clicked")
        console.log(props)
    }

    return (
        <button id="newReviewButton" type="submit" onClick={handleClick}>{props.buttonText}</button>
    );
}

export default NewReview;