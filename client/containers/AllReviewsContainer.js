/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders 
 *
 * ************************************
 */

 import React, {Component} from "react";
 import ReviewContainer from  '/client/containers/ReviewContainer.js'
 import '/client/scss/AllReviewsContainer.scss'
 import { connect } from 'react-redux';
 import * as actions from '../actions/actions.js';

 const mapStateToProps = state => ({
  reviews : state.review.queriedReviews
});

const mapDispatchToProps = dispatch => ({
 renderReview : (reviewID) => dispatch(actions.renderReview(reviewID))
});

 class AllReviews extends Component {
    constructor(props) {
        super(props);
    }
    render() {
   const arrayDiv = []
   let review
   for(let i =0; i < this.props.reviews.length; i++) {
    review = this.props.reviews[i]
    console.log(review)
    arrayDiv.push( <ReviewContainer
                    reviewinfo = {review}
                    renderDetails = {this.props.renderReview}
                   ></ReviewContainer>)
  }
        return(
          <div className = "container">
              {arrayDiv}
          </div>
        );
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllReviews);
