/**
 * ************************************
 *
 * @module  App.js
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component, useEffect } from 'react';
import MainContainer from '/client/containers/MainContainer.js';
import LoginSpotify from './components/LoginSpotify';
import Dashboard from './components/Dashboard';
// const code = new URLSearchParams(window.location.search).get('code');

const App = () => {
  let code = new URLSearchParams(window.location.search).get('code');
  useEffect(() => {
    code = new URLSearchParams(window.location.search).get('code');
  }, []);

  console.log('CODE:', code);
  return (
    <div>
      {/* <MainContainer/> */}
      {code ? <Dashboard code={code} /> : <LoginSpotify />}
    </div>
  );
};

export default App;
