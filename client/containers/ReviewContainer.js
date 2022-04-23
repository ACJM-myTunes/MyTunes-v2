 import React, {Component} from "react";
 import ReviewComponent from '/client/components/ReviewComponent.js'
 import ReviewPopUp from '/client/components/detailedReviewPopUp.js'
  import  '/client/scss/ReviewContainer.scss'
 class ReviewContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
         <div>
          <div>
            <ReviewComponent/>
            <div class = "popup">
            {/* <ReviewPopUp></ReviewPopUp> */}
            </div>
          </div>
          </div>
        );
      }
}

export default ReviewContainer;