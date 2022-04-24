/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes.js';

export const queryData = queryResults => ({
    type: types.QUERYDATA, 
    payload: queryResults
  });

  export const renderReview = reviewID => ({
    type: types.SHOWREVIEWDETAILS, 
    payload: reviewID
  });


