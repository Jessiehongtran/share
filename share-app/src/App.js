import React, {useState} from 'react';
import SignUp from './components/signUp'
import Login from './components/login'
import {Route} from 'react-router-dom'
import CreateProfile from './components/createProfile'
import ChooseCategory from './components/chooseCate'
import AddCategory from './components/addCategory'
import CreateShare from './components/createShare'
import ShareFeed from './components/shareFeed'
import './App.css'

function App() {
  const [id, setId] = useState('')
  const [shareList, setShareList] = useState([])
  console.log('id in App',id)
  
  return (
    <div className="App">
      <h1>Share</h1>
      <Route path='/register' component = {SignUp}/>
      <Route path='/login' 
        render={props => {
          return <Login {...props} setId={setId} />
        }}/>
      <Route path='/createprofile' 
        render={props => {
          return <CreateProfile {...props} id={id}/>
        }} />
      <Route path='/category' component={ChooseCategory} />
      <Route path='/addCategory' component={AddCategory} />
      <Route path='/createShare' component={CreateShare} />
      <Route path='/shareFeed'
        render={props => {
          return <ShareFeed {...props} setShareList={setShareList} shareList={shareList}/>
        }} />
    </div>
  );
}

export default App;
