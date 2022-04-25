import React, {Component} from "react";
import NewReviewForm from '../components/newReviewForm.js'
import NewReview from '../components/newReview.js'
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = state => ({
    showForm : state.review.showReviewForm,
    buttonText : state.review.showReviewButtonText,
    user : state.review.user
});


const mapDispatchToProps = dispatch => ({
    showReviewForm : () => dispatch(actions.showReviewForm()),
    postReview : (params, user) => postReviewActionDispatch(params, user)

});

class SubmitReviewContainer extends Component {
    constructor(props) {
        super(props);
    }    

    render() {
        let form 
        if(this.props.showForm) {
           form = [<NewReviewForm
           user = {this.props.user}
           postReview = {this.props.postReview}
           ></NewReviewForm>]
       } else {
           form = [<div></div>]
       }


        return(
          <div>
              <NewReview
              buttonText = {this.props.buttonText}
              showReviewForm = {this.props.showReviewForm}
              ></NewReview> 
              {form}
          </div>
        );
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitReviewContainer);
