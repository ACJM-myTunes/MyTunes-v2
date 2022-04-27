const spotifyWebApi = require('spotify-web-api-node');
const express = require('express');
require('dotenv').config();

const router = express.Router();
const credentials = {
  clientId: '92edc0bb3af34697b651f0e9efe49c5d',
  clientSecret: 'ba3333c288944788b2622b2c326151dd',
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
      spotifyApi.setAccessToken(data.body.access_token);
    })
    .then(() => spotifyApi.getMe())
    .then((user) => {
      res.locals.user = user.body;
      console.log(res.locals.user);
    })
    .then(() => {
      res.status(200).json({
        accessToken: spotifyApi.getAccessToken(),
      });
    })

    .catch((err) => {
      console.log('err', err);
      res.sendStatus(400);
    });
});

module.exports = router;
