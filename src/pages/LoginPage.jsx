import React, { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tempData, setTempData] = useState(null)

  function handleEmailOnChange(e) {
    setEmail(e.target.value)
  }
  function handlePasswordOnChange(e) {
    setPassword(e.target.value)
  }
  function handleSubmit(event) {
    console.log('Entrando')
    const options = {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    }
    console.log('options', options)
    fetch('https://lab.willandskill.eu/api/v1/auth/api-token-auth/', options)
    .then( response => response.json())
    .then( data => {
      console.log('data', data)
    })
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleEmailOnChange} name="email" placeholder="E-mail" />
        <input type="password" onChange={handlePasswordOnChange} name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
      <div>
        <p>{email}</p>
        <p>{password}</p>
        <p>{tempData}</p>
      </div>
    </div>
  )
}
