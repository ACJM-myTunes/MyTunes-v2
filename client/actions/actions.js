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
        
        async function fetchReviews(params) { 
          const fetchURL = `/search/testUser1${"&"}${params.selectedValue}${"&"}${params.queryValue}`;
          console.log("url", fetchURL);
           const result = await fetch(fetchURL)
           const data =  await result.json()
           console.log("actions data ", data)
           dispatch(queryData([data]))
        }
       fetchReviews(params)
    }   
  }
  /*******  User Search *******/

  export const queryUser = queryResults => ({
    type: types.QUERYUSER,
    payload: queryResults
  });

  export const queryUsersActionDispatch = params => {
    return dispatch => {
        async function fetchUsers(params) { 
          const fetchURL = `/user/${params.username}`
           const result = await fetch(fetchURL)
           const data = result.json()
           dispatch(queryData(data))
        }
       fetchUsers(params)
    }   
  }

    /*******  Post Review *******/
  
  export const postReview = postedReviewResults => ({
    type: types.QUERYDATA, 
    payload: postedReviewResults
  });

  // export const postReviewActionDispatch = (params, user) => {
    // return dispatch => {
         export async function postReviewFunction(params, user) { 
          const fetchURL = `/user/addTrack/${user}`
           const result = await fetch(fetchURL, {
                 method: 'POST', //
                 headers: { 'Content-Type' : 'application/json'},
                 body: JSON.stringify(params)
          });
          //console.log(result);

        }
  //       }
  //      postReview(params, user)
  //   }   
  // }

export const showReviewForm = () => ({
  type: types.SHOWREVIEWFORM
})


