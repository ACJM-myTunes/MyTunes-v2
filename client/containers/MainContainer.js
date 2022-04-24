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
 import AllReviews from  '/client/containers/AllReviewsContainer.js'
 class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div>
              <AllReviews></AllReviews>
          </div>
        );
      }
}

export default MainContainer;


