import React from 'react';

const Reviews = (props) => {
    // style this in a grid
    // button -> 'add review' -> modal review form -> onclick "post" -> invoke function to fetch post request on MainContainer 
    return(
        <>
        <div>{props.currTrack}</div>
        <div>{props.currArtists}</div>
        <div>{props.currTrackReviews}</div>
        </>
    )
}

export default Reviews; 