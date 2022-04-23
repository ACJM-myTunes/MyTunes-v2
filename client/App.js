
/**
 * ************************************
 *
 * @module  App.js
 * @author
 * @date
 * @description
 *
 * ************************************
 */

 import React, { Component } from 'react';
 import MainContainer from '/client/containers/MainContainer.js'

 class App extends Component {
   constructor(props) {
     super(props);
     
   }
 
   render() {
     return(
       <div>
         <MainContainer/>
       </div>
     );
   }
 }
 
 export default App;


