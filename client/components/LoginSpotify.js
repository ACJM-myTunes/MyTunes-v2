import React, { Component } from 'react';
import '/client/scss/ReviewComponent.scss';
import { loginUrl } from '../utils/spotify';

const LoginSpotify = (props) => {
  return (
    <div>
      <img
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='Spotify-Logo'
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default LoginSpotify;
