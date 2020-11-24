import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserContext } from './contexts/UserContext'

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
    <>
      <UserContext.Provider value={{userInfo, setUserInfo, isLoggedIn, setIsLoggedIn}}>
        <Navbar />
        <Switch>
          <Route path='/posts/create'>
            { isLoggedIn ? <PostCreatePage /> : <Redirect to='/login' />}            
          </Route>
          <Route path='/posts/:id' component={PostDetailPage} /> {/* Make to dynamic routing */}
          <Route path='/posts'>
            { isLoggedIn ? <PostListPage /> : <Redirect to='/login' />}            
          </Route>
          <Route path='/home'>
            { isLoggedIn ? <HomePage /> : <Redirect to='/login' />}            
          </Route>
          <Route path='/login'>
            { isLoggedIn ? <Redirect to='/home' /> : <LoginPage />}
          </Route>
          <Route path='/register'>
            { isLoggedIn ? <Redirect to='/home' /> : <RegisterPage />}
          </Route>

          <Route path='/'> <div>Intro page</div> </Route>
        </Switch>
      </UserContext.Provider>
    </>
  );
}

export default App;
