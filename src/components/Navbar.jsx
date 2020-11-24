import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import styled from 'styled-components'
//import { Link } from 'react-router-dom'

import Auth from '../data/AuthKit'
import Link from './styled/Link'

const NavbarStyled = styled.div`
  background-color: #e8e8e8;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`


export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn, setUserInfo } = useContext(UserContext)

  function logout() {
    Auth.removeToken()
    setIsLoggedIn(false)
    setUserInfo({})
  }

  return (
    <NavbarStyled>
        { !isLoggedIn && <Link to='/login' >Login</Link> }
        { !isLoggedIn && <Link to='/register' >Register</Link>}
        { isLoggedIn && <Link to='/home' >Home</Link>}
        { isLoggedIn && <Link to='/posts' >Posts</Link>}
        { isLoggedIn && <Link to='/login' onClick={logout} >Logout</Link>}
    </NavbarStyled>
  )
}