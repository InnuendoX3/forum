import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Auth from '../data/AuthKit'
import { UserContext } from '../contexts/UserContext'

export default function Navbar() {
  const { setIsLoggedIn, setUserInfo } = useContext(UserContext)

  function logout() {
    Auth.removeToken()
    setIsLoggedIn(false)
    setUserInfo({})

    // TODO: Set UserInfo.isLoggedIn to FALSE!
  }

  return (
    <div>
      <span>
        <Link to='/login' >Login</Link> -
      </span>
      <span>
        <Link to='/register' >Register</Link> -
      </span>
      <span>
        <Link to='/home' >Home</Link> -
      </span>
      <span>
        <Link to='/posts' >Posts</Link> -
      </span>
      <span>
        <Link to='/login' onClick={logout} >Logout</Link>
      </span>
    </div>
  )
}