import React, { useState } from 'react'
import './App.css'; // Delete ?
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PostListPage from './pages/PostListPage'
import PostDetailPage from './pages/PostDetailPage'
import PostCreatePage from './pages/PostCreatePage'

import { UserContext } from './contexts/UserContext'


function App() {
  const [userInfo, setUserInfo] = useState({
    email:      '',
    country:    '',
    lastName:   '',
    firstName:  '',
    isLoggedIn: false
  })

  return (
    <div className="App">
      <UserContext.Provider value={{userInfo, setUserInfo}}>
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
            { userInfo.isLoggedIn ? <Redirect to='/home' /> : <LoginPage />}
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
