import React, { Component } from 'react';
import { loginUrl } from '../utils/spotify';
import logo from '../assets/mytunes-logo-mui.png';

const LoginSpotify = (props) => {
  return (
    <div className='login-container'>
      <div className='login-info'>
        <img
          // src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
          src={logo}
          alt='Spotify-Logo'
        />
        <br></br>
        <a href={loginUrl} className='spotBtn'>
          Login With Spotify
        </a>
      </div>
    </div>
  );
};

export default LoginSpotify;
