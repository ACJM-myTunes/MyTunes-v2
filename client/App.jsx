import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import Login from './containers/Login.jsx'
import SignUp from './containers/SignUp.jsx'
import MyReviews from './components/MyReviews.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // can only have one "Router" - no Routers inside of routers allowed 
  return(
    <div>
    <Router>
      <Routes>
        <Route exact path='/' element={ <Login /> }></Route>
        <Route exact path='/home' element={ <MainContainer /> }></Route>
        <Route exact path='/signup' element={<SignUp />}></Route>
        <Route exact path='/home/myreviews' element={ <MyReviews /> }></Route>
      </Routes>
    </Router>
    </div>
  );
}
 
export default App;