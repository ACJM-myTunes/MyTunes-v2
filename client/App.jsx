import React, { useState, useEffect } from 'react';
import Login from './containers/Login.jsx';
import Dashboard from './components/Dashboard';
import MainContainer from './containers/MainContainer.jsx';
import './scss/application.scss';

const App = () => {
  // let code = new URLSearchParams(window.location.search).get('code');
  // useEffect(() => {
  //   code = new URLSearchParams(window.location.search).get('code');
  // }, []);

  // console.log('CODE:', code);
  return (
    <div>
      {/* {code ? <Dashboard code={code} /> : <Login />} */}
      {/* <Login /> */}
      <MainContainer />
    </div>
  );
};

export default App;
