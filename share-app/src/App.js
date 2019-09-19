import React from 'react';
import Login from './components/login'
import {Route} from 'react-router-dom'
import CreateProfile from './components/createProfile'

function App() {
  return (
    <div className="App">
      <h1>Share</h1>
      <p>What's up, How are you doing today?</p>
      <Route path='/login' component={Login} />
      <Route path='/createprofile' component={CreateProfile} />

    </div>
  );
}

export default App;
