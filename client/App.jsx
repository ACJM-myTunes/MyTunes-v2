import React from 'react';
import Login from './containers/Login.jsx';
import Dashboard from './components/Dashboard';

const App = () => {
  let code = new URLSearchParams(window.location.search).get('code');
  useEffect(() => {
    code = new URLSearchParams(window.location.search).get('code');
  }, []);

  console.log('CODE:', code);
  return(
    <div>
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}
 
export default App;