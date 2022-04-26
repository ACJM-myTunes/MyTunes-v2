// * ************************************
// *
// * @module  Review Component
// * @author
// * @date
// * @description stateful component that renders TotalsDisplay and MarketsContainer
// *
// * ************************************
// */
import React, { Component } from 'react';
import '/client/scss/ReviewComponent.scss'
 
const ReviewCard = (props) => {
  const handleClick = () => {
   props.renderDetails(props.reviewID)
  }
   return (

<div class = 'vinylcover'>
   <p class = 'vinylcoverText'>Song: {props.song}</p>
   <p class = 'vinylcoverText'>Artist: {props.artist}</p>
   <p class = 'vinylcoverText'>Album: {props.album}</p>
   <p class = 'vinylcoverText'>Genre: {props.genre}</p>
   <button class = "vinylcoverButton" onClick = {handleClick}> {props.buttonText}</button>
</div>
    )
   }
 

export default ReviewCard


