const spotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();

const credentials = {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/api/auth/spotify/',
};

//  setup
let spotifyApi = new spotifyWebApi(credentials);
const userController = {
  getSpotifyToken: (req, res, next) => {
    const code = req.query.code;
    console.log('clientId', process.env.SPOTIFY_CLIENT_ID);
    // Retrieve an access token
    spotifyApi
      .authorizationCodeGrant(code)
      .then((data) => {
        // Returning the User's AccessToken in the json formate
        console.log('body', data.body);
        spotifyApi.setAccessToken(data.body.access_token);
        spotifyApi.setRefreshToken(data.body.refresh);
      })
      .then(() => spotifyApi.getMe())
      .then((user) => {
        res.locals.user = user.body;
        res.cookie('id', res.locals.user.id);
        res.cookie('username', res.locals.user.email);
        console.log(res.locals.user);
        return next();
        // res.redirect('http://localhost:8080/');
      })
      .catch((err) => {
        return next(err);
      });
  },
  getUserPlaylists: (req, res, next) => {
    // const { id } = res.locals.user;
    // console.log(res.locals.user);
    console.log(req.cookies.id);
    const { id, username } = req.cookies;
    spotifyApi
      .getUserPlaylists(id)
      .then((data) => {
        console.log('getUserPlaylists');
        res.locals.playlists = data.body;
        return next();
      })
      .catch((err) => next(err));
  },
  getTracks: (req, res, next) => {
    const { query } = req.query;
    console.log(query);
    spotifyApi
      .searchTracks(`track: ${query}`)
      .then(function (data) {
        console.log('Tracks found: ', data.body);
        res.locals.tracks = data.body.tracks.items;
        return next();
      })
      .catch((err) => next(err));
  },
  getPlaylistTracks: (req, res, next) => {
    const { playlistId } = req.params;
    spotifyApi
      .getPlaylistTracks(playlistId, {
        limit: 5,
        fields: 'items',
      })
      .then(
        function (data) {
          console.log('The playlist contains these tracks', data.body);
          res.locals.playlist = data.body;
          return next();
        },
        function (err) {
          console.log('Something went wrong!', err);
          return next(err);
        }
      );
  },
};

module.exports = userController;
