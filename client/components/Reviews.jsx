import React from 'react';
import EachReview from './EachReview';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Reviews = (props) => {
    const reviews = [];
    for (let i = 0; i < props.currTrackReviews?.length; i++) {
        reviews.push(
            <EachReview 
                key={`Review ${i}`}
                title={props.currTrackReviews[i].title}
                rating={props.currTrackReviews[i].rating}
                review={props.currTrackReviews[i].review}
            />
        )
    }

    return(
        <>
        <div>{props.currTrack}</div>
        <div>{props.currArtists}</div>
        <div>{reviews}</div>
        <Link to='/addreview'><Button size="small" onClick={ () => props.submitReview(props.currTrackID)}>ADD REVIEW</Button></Link>
        </>
    )
}

export default Reviews; 