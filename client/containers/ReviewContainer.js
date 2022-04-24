 import React, {Component} from "react";
 import ReviewCard from '/client/components/ReviewCard.js'
 import ReviewVinyl from '/client/components/ReviewVinyl.js'
 import  '/client/scss/ReviewContainer.scss'


  class ReviewContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(          
          <div className = "container">
            <div className = "cover">
            <ReviewCard/>
            </div>
            <div className = "vinyl">
            <ReviewVinyl/>
            </div>
          </div>
        );
      }
}

export default ReviewContainer;