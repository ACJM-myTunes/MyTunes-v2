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
 import UserSearch from "../components/UserSearch";

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div>
            <h1> MyTunes </h1>
            <UserSearch />
          </div>
        );
      }
}

export default MainContainer;
