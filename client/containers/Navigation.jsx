import React from 'react';
import Search from '../components/Search.jsx'

const Navigation = (props) => {
    return(
        <div>
            <h1>Welcome to MyTunes</h1>
            {/* <button onClick={props.linkToHome}>Home</button>
            <button onClick={props.linkToMyReviews}>My Reviews</button> */}
            <Search handleSeeReviews={props.handleSeeReviews} currSongReviews={props.currSongReviews} />
        </div>
    )
}

export default Navigation; 