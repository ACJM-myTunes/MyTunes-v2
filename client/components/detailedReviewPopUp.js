import React, { Component } from 'react';
import '/client/scss/detailedReviewPopUp.scss'
 
const ReviewPopUp = (props) => {
   
   return (

  <div className = "talkbubble">
    <p className = "talkbubbleText">{props.review}</p>
   </div>


    )

   }
 

export default ReviewPopUp