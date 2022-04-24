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

  export const queryReviewsActionDispatch = params => {
    return dispatch => {
        
        function fetchReviews(params) { 
          const fetchURL = `/search/${params.selectedValue}/:${params.queryValue}`
          //  const result = await fetch(fetchURL)
          //  const data = result.json()   
          //  dispatch(queryData(data))
          dispatch(queryData([{ song: 'filler1', artist: "filler2", album: "filler3", genre: "filler4", RID: 0, showDetails: false, buttonText:  "Check the Review"}]))
        }
       fetchReviews(params)
    }   
  }


