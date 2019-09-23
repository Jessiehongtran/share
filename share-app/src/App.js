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
  const [id, setId] = useState('') //user_id
  console.log('user_id in App',id)
  const [shareList, setShareList] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [categoryId, setCategoryId] = useState('')
  console.log('category_id', categoryId)
  
  //if shareFeed's router is set '/' as default, there should be authentication on the server
  return (
    <div className="App">
      <h1>Share</h1>
      <Route path='/register' 
      render={props => {
        return <SignUp {...props} setId={setId} />
      }}/>
      <Route exact path='/login' 
        render={props => {
          return <Login {...props} />
        }}/>
      <Route path='/createprofile' 
        render={props => {
          return <CreateProfile {...props} id={id}/>
        }} />
      <Route path='/category' 
        render={props => {
          return <ChooseCategory {...props} 
          setCategoryList={setCategoryList} 
          categoryList={categoryList}
          categoryId = {categoryId}
          setCategoryId = {setCategoryId}
          />
        }}/>
      <Route path='/addCategory' 
        component={AddCategory} />
      <Route path='/createShare' 
        render={props => {
          return <CreateShare {...props} categoryId={categoryId}/>
        }} />
      <Route path='/shareFeed'
        render={props => {
          return <ShareFeed {...props} 
          setShareList={setShareList} 
          shareList={shareList}/>
        }} />
    </div>
  );
}

export default App;
