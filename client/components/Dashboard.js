import React, { useState, useEffect } from 'react';
// import useAuth from './useAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import axios from 'axios';

// Setting the spotifyApi, so that we can use it's functions
const spotifyApi = new SpotifyWebApi({
  clientId: '92edc0bb3af34697b651f0e9efe49c5d',
});

const Dashboard = ({ code }) => {
  // const accessToken = useAuth(code);
  console.log('hit the dashboard', code);
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    axios
      .post('/api/auth/spotify', { code })
      .then((response) => {
        // If success then cut the code string from the URL and execute the other thing
        window.history.pushState({}, null, '/');

        console.log(response.data);
        setAccessToken(response.data.accessToken);
        return response.data.accessToken;
      })
      .then((token) => {
        spotifyApi.setAccessToken(token);
      })
      .then(() => spotifyApi.getMe())
      .then((data) => {
        console.log('getMeData:', data);
      })
      .catch((err) => {
        //   If fail redirect to home page - Login page
        console.log('Dashboard', err);
        // window.location = '/';
      });
  }, [code]);

  //   useEffect(() => {
  //     if (!accessToken) return;

  //     // Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again.
  //     spotifyApi.setAccessToken(accessToken);

  //     // Get user details with help of getMe() function
  //     spotifyApi.getMe().then(data => {
  //       console.log(data);
  //     })
  //   }, [accessToken]);
  return <div>{code}</div>;
};

export default Dashboard;
