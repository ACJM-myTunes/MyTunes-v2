import React, { Component } from 'react';
import Navigation from '../components/Navigation.jsx';

// would be our "homepage"
// would need access to "user"
class MainContainer extends Component {
  constructor(props) {
    super(props);
    // some state changes may need to happen in App.jsx, such as user reviews 
    this.state = {
      userID: ''
      // user reviews
      // user playlist
      // fetched songs
    }
  }

  componentWillMount() {    
    // fetch GET request to access userID, user reviews, and user playlist
  }

  render() { 
    // might need to move this to App.jsx: 
    // NAVIGATE bar -> link to "home" "my reviews" + search bar
      // SEARCH bar 
        // onkeypress "enter" -> SONGS (map/for loop) -> render each SONG in a box 
          // with "add reviews" button onclick -> modal to ADDREVIEW + if any have x amount of reviews -> button onclick -> route to: REVIEWS
    // display fetched user PLAYLIST

    // hierarchy: 
    // PLAYLIST 
    // NAVIGATATION
      // MY REVIEWS
      // SEARCH
        // SONGS
          // SONG
            // ADDREVIEW // REVIEWS

    return (
      <>
      <div>
        <h1>Welcome to MyTunes</h1>
        <Navigation />
        Hi 
      </div>
      </>
    );
  }
}

export default MainContainer;