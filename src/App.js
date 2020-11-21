import React, { useState } from 'react'
import './App.css'; // Delete ?
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserContext } from './contexts/UserContext'
import Auth from './data/AuthKit'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PostListPage from './pages/PostListPage'
import PostDetailPage from './pages/PostDetailPage'
import PostCreatePage from './pages/PostCreatePage'

import Navbar from './components/Navbar'



function App() {
  const [userInfo, setUserInfo] = useState({
    email:      '',
    country:    '',
    lastName:   '',
    firstName:  ''
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <UserContext.Provider value={{userInfo, setUserInfo, isLoggedIn, setIsLoggedIn}}>
        <Navbar />
        <Switch>
          <Route path='/posts/create'> 
            <PostCreatePage /> 
          </Route>
          <Route path='/posts/:id'> {/* Make to dynamic routing */}
            <PostDetailPage /> 
          </Route> 
          <Route path='/posts'>
            <PostListPage />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/login'>
            { isLoggedIn ? <Redirect to='/home' /> : <LoginPage />}
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>

          <Route path='/'> <div>Intro page</div> </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
