/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

 import { combineReducers } from 'redux';
 import ReviewReducer from '/client/reducers/ReviewReducer.js';

 // import all reducers here
 
 
 // combine reducers
 const reducers = combineReducers({
  // if we had other reducers, they would go here
  review: ReviewReducer,
  user: userReducer

});


// make the combined reducers available for import
export default reducers;

