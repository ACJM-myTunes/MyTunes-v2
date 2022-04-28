import React, { useState, useEffect } from 'react';
import Login from './components/LoginSpotify';
import Dashboard from './components/Dashboard';
import MainContainer from './containers/MainContainer.jsx';
import './scss/application.scss';
import { useCookies } from '@react-smart/react-cookie-service';

const App = () => {
  // let code = new URLSearchParams(window.location.search).get('code');
  // useEffect(() => {
  //   code = new URLSearchParams(window.location.search).get('code');
  // }, []);
  // const handleLogout = () => {
  //   const {deleteAllCookies} = useCookies();
  //   deleteAllCookies();
  // }

  const { check } = useCookies();

  // console.log('CHECK COOKIE', check('id'));

  // console.log('CODE:', code);
  return <div>{check('id') ? <MainContainer /> : <Login />}</div>;
};

export default App;
