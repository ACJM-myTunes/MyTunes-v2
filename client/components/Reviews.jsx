import React from 'react';
import EachReview from './EachReview';
import {Button, Container, Typography} from '@mui/material';
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
        <Container maxWidth='md'>
        <div>{reviews}</div>
       {reviews.length===0 && <Typography variant='h6' sx={{color:'white'}}>Be the first one to review {props.currTrack}</Typography>}
        <Button variant='contained' sx={{mt: 5}} onClick={ () => props.submitReview(props.currTrackID, props.currTrack)}><Link to='/addreview' style={{color: 'white'}}>ADD REVIEW</Link></Button>
        </Container>
    )
}

export default Reviews; 