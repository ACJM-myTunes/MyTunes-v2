
 

import * as types from '/client/constants/actionTypes.js';

const initialState = {
queriedReviews : [{song: 'filler1', artist: 
"filler2", album: "filler3", genre: "filler4",
RID: 0,
showDetails: false,
buttonText:  "Check the Review"
}, 

{song: 'filler1', artist: 
"filler2", album: "filler3", genre: "filler4",
RID: 1,
showDetails: false,
buttonText:  "Check the Review"
},

{song: 'filler1', artist: 
"filler2", album: "filler3", genre: "filler4",
RID: 3,
showDetails: false,
buttonText:  "Check the Review"
},

{song: 'filler1', artist: 
"filler2", album: "filler3", genre: "filler4",
RID: 4,
showDetails: false,
buttonText:  "Check the Review"
}


],
reviewID : 0                      
};

const  reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.QUERYDATA: {
            const queriedResult = action.payload
            for(let i = 0; i < queriedResult.length; i++) {
               queriedResult[i].RID = state.reviewID
               queriedResult[i].showDetails = false
               queriedResult[i].buttonText = "Check the Review!"
               state.reviewID++
            }
          return {
            ...state,
            queriedReviews: queriedResult
          };  
        }

        case types.SHOWREVIEWDETAILS: {
         let newList = state.queriedReviews.slice()
         for(let i = 0; i < newList.length; i++) {
         if(newList[i].RID === action.payload) {
             if(!newList[i].showDetails) {
                newList[i].showDetails = true
                newList[i].buttonText = "Hide Review"
             } else {
                newList[i].showDetails = false
                newList[i].buttonText = "Check the Review!"
             }
           break;
         }
     } 
         return {
             ...state,
             queriedReviews: newList
           };
       }








        default: {
            return state;
          }
        
    }
}

export default reviewReducer;

