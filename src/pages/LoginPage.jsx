import React, { useState, useContext } from 'react'
import Auth from '../data/authKit'

import { UserContext } from '../contexts/UserContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  //To useContext
  const { userInfo, setUserInfo } = useContext(UserContext)

  function handleEmailInput(e) {
    setEmail(e.target.value)
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(event) {
    authenticate()
    event.preventDefault()
  }

  async function authenticate() {
    const loginResponse = await Auth.login(email, password)
    setErrorMessage(loginResponse) //For showing error message on login
    if (loginResponse.succeeded) {
      //If ok set token and redirect to HOme
      setUserInfo({ ...userInfo, isLoggedIn: true})
      Auth.setToken(loginResponse.token)

    }

    //if not show message
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleEmailInput} name="email" placeholder="E-mail" />
        <input type="password" onChange={handlePasswordInput} name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
      <div>
        <p>{ errorMessage && errorMessage.message } </p>
        <small>{email} // {password}</small>
      </div>
    </div>
  )
}
