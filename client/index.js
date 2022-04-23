/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

 import React from 'react';
 import { render } from 'react-dom';
 import { Provider } from 'react-redux';
 import App from '/client/App'
 import store from './store'

 render(
   <Provider store = {store}>
     <App
     />
     </Provider>, 
   document.getElementById('root')
 );

