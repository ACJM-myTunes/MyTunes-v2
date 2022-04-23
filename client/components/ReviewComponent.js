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
   
   return (

<div>
<div class = 'vinylcover'>
   <p class = 'vinylcoverText'>Song: {"Filler Song"}</p>
   <p class = 'vinylcoverText'>Artist: {"Filler Artist"}</p>
   <p class = 'vinylcoverText'>Album: {"Filler Album"}</p>
   <p class = 'vinylcoverText'>Genre: {"Filler Genre"}</p>
   <button class = "vinylcoverButton"> Check the Review!</button>
</div>
<div class = "circleContainer">
<div class="circle">
</div>
</div>
</div>
    )
   }
 

export default ReviewCard