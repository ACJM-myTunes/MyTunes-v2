import React, { Component } from 'react';
import Search from '../components/Search.jsx';
import Playlists from '../components/Playlists.jsx';
import SeeReviews from '../components/SeeReviews.jsx';
import Reviews from '../components/Reviews.jsx';
import MyReviews from './MyReviews.jsx'
import Navigation from './Navigation.jsx';

// TEST DATA: 
const db = require('./db.js');

// would be our "homepage"
// would need access to "user"
class MainContainer extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      userID: '',
      userReviews: [],
      currSong: [],
      currSongReviews: [],
      seeReviews: false,
      // goHome: true,
      // goToMyReviews: false
    }
    this.handleSeeReviews = this.handleSeeReviews.bind(this);
    // this.linkToMyReviews = this.linkToMyReviews.bind(this);
    // this.linkToHome = this.linkToHome.bind(this);
  }

  componentWillMount() {    
    // fetch GET request to access userID, user reviews, and user playlist 
  }

  linkToMyReviews() {
    // this.setState({
    //   ... this.state, 
    //   goToMyReviews: true,
    //   goHome: false
    // })
  }

  linkToHome() {
    // this.setState({
    //   ... this.state, 
    //   goHome: true,
    //   goToMyReviews: false
    // })
  }

  handleSeeReviews(songID) {
    // fetch GET request to access reviews for a song (based on ?) 
    // path: `/song/...` ?
    // update currSong
    // update currSongReviews
    // TESTING WITH FAKEREVIEWS:
    const reviews = db[songID];
    this.setState({
      ... this.state, 
      currSongReviews: reviews,
      seeReviews: true
    })
  }

  render() { 
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

    if (this.state.seeReviews) return <Reviews currSongReviews={this.state.currSongReviews} />;
    // if (this.state.goHome) return <MainContainer />;
    // if (this.state.goToMyReviews) return <MyReviews />;

    return (
      <>
      <div>
        {/* <Navigation 
          linkToHome={this.linkToHome}
          linkToMyReviews={this.linkToMyReviews}
          handleSeeReviews={this.handleSeeReviews} 
          currSongReviews={this.state.currSongReviews}
        /> */}
        <Search handleSeeReviews={this.handleSeeReviews} currSongReviews={this.state.currSongReviews} />
        Hi
        {/* {this.state.seeReviews && <Reviews /> ||
        <Playlists />} */}
        <Playlists />
      </div>
      </>
    );
  }
}

export default MainContainer;