import React, { useState } from 'react'
import Auth from '../data/authKit'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tempData, setTempData] = useState(null)

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
    console.log('loginResponse Finally???', loginResponse)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleEmailInput} name="email" placeholder="E-mail" />
        <input type="password" onChange={handlePasswordInput} name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
      <div>
        <p>{email}</p>
        <p>{password}</p>
        <p>{ tempData && tempData.token }</p>
      </div>
    </div>
  )
}
