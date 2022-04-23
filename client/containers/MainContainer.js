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
 import ReviewContainer from '/client/containers/ReviewContainer.js'
 class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
            <ReviewContainer></ReviewContainer>
          </div>
        );
      }
}

export default MainContainer;
