import React from 'react';
import Login from './components/login'
import {Route} from 'react-router-dom'
import CreateProfile from './components/createProfile'
import ChooseCategory from './components/chooseCate'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Share</h1>
      <Route path='/login' component={Login} />
      <Route path='/createprofile' component={CreateProfile} />
      <Route path='/category' component={ChooseCategory} />

    </div>
  );
}

export default App;
