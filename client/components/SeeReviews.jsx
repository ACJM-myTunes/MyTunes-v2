import React from 'react';

const SeeReviews = (props) => {
    return(
        <button onClick={() => props.handleSeeReviews(props.id)}>See Reviews</button>
    )
}

export default SeeReviews; 