import React from 'react';
import '../scss/newReviewForm.scss';

const newReviewForm = (props) => {
    let postParams = {};
    const handleSongNameChange = (e) => {
        postParams['name'] = e.target.value;
    }
    const handleArtistNameChange = (e) => {
        postParams['artist'] = e.target.value
    }
    const handleAlbumNameChange = (e) => {
        postParams['album'] = e.target.value;
    }
    const handleGenreChange = (e) => {
        postParams['genre'] = e.target.value
    }
    const handleRatingChange = (e) => {
        postParams['rating'] = e.target.value
    }
    const handleReviewBodyChange = (e) => {
        postParams['review'] = e.target.value
    }
    const handleClick = () => {
        props.postReview(postParams, props.user)
    }


    return (
        <form className="myForm">
            <input className="newReviewInput" type="text" placeholder="Song" onChange={handleSongNameChange}/>
            <input className="newReviewInput" type="text" placeholder="Artist" onChange={handleArtistNameChange}/>
            <input className="newReviewInput" type="text" id="album" placeholder="Album" onChange={handleAlbumNameChange}/>
            <input className="newReviewInput" id="genre" type="text" placeholder="Genre" onChange={handleGenreChange}/>
            <input className="newReviewInput" type="text" placeholder="Rating" onChange={handleRatingChange}/>
            <textarea className="newReviewTextArea" type="text" placeholder="Review Body" onChange={handleReviewBodyChange}/>
            <button id="submitReview" type="button" onClick={handleClick}>Submit Review</button>
        </form>
    );
}

export default newReviewForm;
