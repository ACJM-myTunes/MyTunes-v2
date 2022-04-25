import * as types from '/client/constants/actionTypes.js';

const initialState = {
usernameQueried : '',
usersReviews : []             
};

// { username: 'sampleUsername',
//   reviews: [{ song: 'sampleSong', artist: 'sampleArtist', genre: "sampleGenre", RID: 0, showDetails: false }]
// }

const  userReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.QUERYUSER: {
            const queriedUser = action.payload
          return {
            ...state,
            usernameQueried: queriedUser.username,
            usersReviews: queriedResult[1],
          };  
        }
        default: {
            return state;
          }
        
    }
}

export default userReducer;