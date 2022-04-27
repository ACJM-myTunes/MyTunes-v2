const spotifyWebApi = require('spotify-web-api-node');
const express = require('express');
require('dotenv').config();

const router = express.Router();
const credentials = {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:8080/',
};

router.post('/', (req, res) => {
  //  setup
  let spotifyApi = new spotifyWebApi(credentials);

  //  Get the "code" value posted from the client-side and get the user's accessToken from the spotify api
  const code = req.body.code;
  console.log('router', code);
  // Retrieve an access token
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      // Returning the User's AccessToken in the json formate
      console.log('body', data.body);
      res.status(200).json({
        accessToken: data.body.access_token,
      });
    })
    .catch((err) => {
      console.log('err', err);
      res.sendStatus(400);
    });
});

module.exports = router;
