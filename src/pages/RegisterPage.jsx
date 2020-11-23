import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Auth from '../data/AuthKit'

export default function RegisterPage() {
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [country, setCountry] = useState('1') // Harcoded
  const [countries, setCountries] = useState(null)
  const [errorMessages, setErrorMessages] = useState(null)

  async function getCountries() {
    const countriesFetched = await Auth.fetchCountries()
    setCountries(countriesFetched)
  }
  
  function handleEmailInput(e) {
    setEmail(e.target.value)
  }
  function handlePasswordInput(e) {
    setPassword(e.target.value)
  }
  function handleFirstNameInput(e) {
    setFirstName(e.target.value)
  }
  function handleLastNameInput(e) {
    setLastName(e.target.value)
  }
  function handleCountriesInput(e) {
    setCountry(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const newUser = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      country: country
    }
    const registered = await Auth.createNewUser(newUser)
    if(registered.succeeded) {
      history.push('/login')
    } else {
      setErrorMessages(registered.errorMessages)
    }
    console.log('submitResponse', registered)
  }
  
  useEffect(() => {
    getCountries()
  }, [])
  
  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleEmailInput} placeholder="Email" required />
        <input type="text" onChange={handlePasswordInput} placeholder="Password" required />
        <input type="text" onChange={handleFirstNameInput} placeholder="First name" required />
        <input type="text" onChange={handleLastNameInput} placeholder="Last name" required />
        <select name="countries" onChange={handleCountriesInput}>
          {countries && countries.map((country, index) => {
            return <option value={country.id} key={index}> {country.title} </option>
          })}
        </select>
        <button>Register</button>
      </form>
      <div> { errorMessages && errorMessages.map((errorMessage, index) => {
        return <div key={index}> {errorMessage} </div>
      })} </div>
    </>
  )
}