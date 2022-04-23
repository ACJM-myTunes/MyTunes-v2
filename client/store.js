/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

 import { createStore, applyMiddleware } from 'redux';
//  import reducers from './reducers/index';
 import thunk from 'redux-thunk';
 
 // we are adding composeWithDevTools here to get easy access to the Redux dev tools
 const store = createStore(
//    reducers,
   applyMiddleware(thunk)
 );
 export default store;


