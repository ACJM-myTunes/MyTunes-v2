 import React from "react";
 import ReviewCard from '/client/components/ReviewCard.js'
 import ReviewVinyl from '/client/components/ReviewVinyl.js'
 import DetailedReview from '/client/components/detailedReviewPopUp.js'
 import  '/client/scss/ReviewContainer.scss'

  const ReviewContainer = (props) => {

     let display
      if(props.reviewinfo.showDetails) {
         display = [<DetailedReview
          review = {props.reviewinfo.review}
                    ></DetailedReview>]
      } else {
         display = [<div></div>]
      }

        console.log(props.reviewinfo)
        return(          
          <div className = "container">
            
            <div className = "cover">
            <ReviewCard
            song = {props.reviewinfo.name}
            artist = {props.reviewinfo.artist}
            album = {props.reviewinfo.album}
            genre = {props.reviewinfo.genre}
            buttonText = {props.reviewinfo.buttonText}
            reviewID   = {props.reviewinfo.RID}
            renderDetails = {props.renderDetails}
            />
            </div>
            
            <div className = "reviewbubble">
              {display}
            </div>

            <div className = "vinyl">
            <ReviewVinyl/>
            </div>

           


          </div>
        );

}

export default ReviewContainer;