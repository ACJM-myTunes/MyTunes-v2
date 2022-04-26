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
 import SearchBar from '/client/components/songSearchBar.js'
 import { connect } from 'react-redux';
 import * as actions from '../actions/actions.js';
 import AllReviews from '/client/containers/AllReviewsContainer.js'
import SubmitReviewContainer from "./submitReviewContainer.js";
//import usersDashboard from '../client/components/usersDashboard.js';
import '../scss/MainContainer.scss';
 
const mapStateToProps = state => ({
    reviews : state.review.queriedReviews
});


const mapDispatchToProps = dispatch => ({
    queryReviews : (params) => dispatch(actions.queryReviewsActionDispatch(params))
   });

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div>
             <nav>
             <SearchBar
                        queryReviews = {this.props.queryReviews}
                        state = {this.props.reviews}
            ></SearchBar>
            </nav>
            <div id="main">
                {/* <usersDashboard /> */}
                <div className = "showReviews">
             <AllReviews></AllReviews>
             </div>
             <SubmitReviewContainer />
            </div>



          </div>
        );
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
