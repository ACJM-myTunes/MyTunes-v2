import React, { Component } from 'react';
import Playlists from '../components/Playlists.jsx';
import Reviews from '../components/Reviews.jsx';
import MyReviews from './MyReviews.jsx'
import AddReview from './AddReview.jsx';
import Navigation from './Navigation.jsx';
import Search from '../components/Search.jsx';
import Songs from '../components/Songs.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loginUrl } from '../utils/spotify';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      userReviews: [],
      searchResults: [],
      searchError: null,
      currTrack: '',
      currTrackID: '',
      currArtists: '',
      currTrackReviews: [],
      noReviews: null,
      currReviewTrackID: '',
    }
    this.handleSeeReviews = this.handleSeeReviews.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  componentWillMount() {
    // to see if we need this later - should we access userid from cookies in this function?
    // or componentDidMount() ?
  }

  handleSearch(query) {
    fetch(`/api/tracks?query=${query}`)
      .then(res => { 
        if (res.ok) return res.json();
        else throw new Error('Unable to gather data...');
      })
      .then(items => {
        this.setState({...this.state, searchResults: items});
      })
      .catch(err => {
        this.setState({...this.state, searchError: `${err}`});
      })
  }

  handleSeeReviews(track, artists, trackID) {
    fetch(`/api/reviews/${trackID}`)
      .then(res => { 
        if (res.ok) return res.json();
      })
      .then(reviews => {
        this.setState({
          ... this.state, 
          currTrack: track,
          currTrackID: trackID,
          currArtists: artists, 
          currTrackReviews: reviews,
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  submitReview(trackID) {
    this.setState({...this.state, currReviewTrackID: trackID});
  }

  render() {
    // search logic:
    const results = [...this.state.searchResults];
    const songsArray = [];
    for (let i = 0; i < results?.length; i++) { // (i think) the '?' ensures we'll get blank display of songs if there are no songs 
      const allArtists = results[i].artists;
      let artists = [];
      artists = allArtists.map(artist => artist.name);
      songsArray.push(<Songs 
          key={`Song ${i}`} 
          albumCover={results[i].album.images[0].url}
          albumName={results[i].album.name}
          id={results[i].id} 
          track={results[i].name} 
          artists={artists}
          handleSeeReviews={this.handleSeeReviews} 
      />);
    }

    return (
        <Router>
          <Navigation 
            handleSeeReviews={this.handleSeeReviews} 
            currSongReviews={this.state.currSongReviews} 
            handleSearch={this.handleSearch}
          /> 
          <Routes>
            <Route exact path='/' element={<Playlists />}/>
            <Route exact path='/myreviews' element={<MyReviews />}/>
            <Route exact path='/addreview' element={<AddReview trackID={this.state.currReviewTrackID} />}/>
            <Route exact path='/song/reviews' element={<Reviews 
                                                      submitReview={this.submitReview}
                                                      currTrack={this.state.currTrack}
                                                      currTrackID={this.state.currTrackID}
                                                      currArtists={this.state.currArtists}
                                                      currTrackReviews={this.state.currTrackReviews}
                                                      noReviews={this.state.noReviews}
                                                      />}/>
            <Route exact path='/search' element={<Search  
                                                  songsArray={songsArray}
                                                  searchError={this.state.searchError}
                                                />}/>
          </Routes>
        <Router />
    );
  }
}

export default MainContainer;

// NAVIGATE bar -> link to "home" "my reviews" + search bar
// SEARCH bar
// onkeypress "enter" -> SONGS (map/for loop) -> render each SONG in a box
// with "add reviews" button onclick -> modal to ADDREVIEW + if any have x amount of reviews -> button onclick -> route to: REVIEWS
// display fetched user PLAYLIST

// hierarchy:
// PLAYLIST ('/home')
// MY REVIEWS ('/myreviews')
// NAVIGATATION
// SEARCH
// SONGS
// SONG
// ADDREVIEW // REVIEWS
