import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Auth from '../data/AuthKit'
import styled from 'styled-components'

import TextInput from '../components/styled/TextInput'
import SubmitButton from '../components/styled/SubmitButton'
import Select from '../components/styled/Select'
import Form from '../components/styled/Form'
import Page from '../components/styled/Page'
import WrapperHor from '../components/styled/WrapperHor'
import Title from '../components/styled/Title'
import Error from '../components/styled/Error'

const ErrorWrapper = styled(WrapperHor)`
  padding-top: 10px;
`


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
    <Page>
      <WrapperHor>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit}>
        <TextInput type="text" onChange={handleEmailInput} placeholder="Email" required />
        <TextInput type="password" onChange={handlePasswordInput} placeholder="Password" required />
        <TextInput type="text" onChange={handleFirstNameInput} placeholder="First name" required />
        <TextInput type="text" onChange={handleLastNameInput} placeholder="Last name" required />
        <Select name="countries" onChange={handleCountriesInput}>
          {countries && countries.map((country, index) => {
            return <option value={country.id} key={index}> {country.title} </option>
          })}
        </Select>
        <SubmitButton value='Register' />
      </Form>
      <ErrorWrapper> 
        { 
          errorMessages && errorMessages.map((errorMessage, index) => {
            return <Error key={index}> {errorMessage} </Error>
          })
        } 
      </ErrorWrapper>
      </WrapperHor>
    </Page>
  )
}