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
 import ReviewComponent from '/client/components/ReviewComponent.js'
 class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div>
            <ReviewComponent/>
          </div>
        );
      }
}

export default MainContainer;
