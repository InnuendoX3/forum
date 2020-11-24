import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import Auth from '../data/AuthKit'
import styled from 'styled-components'

import TextInput from '../components/styled/TextInput'
import SubmitButton from '../components/styled/SubmitButton'
import Form from '../components/styled/Form'
import Page from '../components/styled/Page'
import WrapperHor from '../components/styled/WrapperHor'
import Title from '../components/styled/Title'
import Error from '../components/styled/Error'

const ErrorWrapper = styled(WrapperHor)`
  padding-top: 10px;
`

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  //To useContext
  const { setUserInfo, setIsLoggedIn } = useContext(UserContext)

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
      // Set token
      Auth.setToken(loginResponse.token)
      // Set user info into userInfo context
      setUserInfoInContext()
      setIsLoggedIn(true)
    }
  }

  async function setUserInfoInContext() {
    const userInfoAPI = await Auth.getUserInfo()
    setUserInfo({
      email:      userInfoAPI.email,
      country:    userInfoAPI.country,
      lastName:   userInfoAPI.lastName,
      firstName:  userInfoAPI.firstName
    })
  }

  useEffect(() => {
    // TODO: Everything on context erases when refreshing page.
    // useEffect asking for getToken on every page looking if there is a token?
    // otherwise get everything again from API
    if(Auth.getToken()) {
      setUserInfoInContext()
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <Page>
      <WrapperHor>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <TextInput type="text" onChange={handleEmailInput} name="email" placeholder="E-mail" />
          <TextInput type="password" onChange={handlePasswordInput} name="password" placeholder="Password" />
          <SubmitButton value="Login" />
        </Form>
        <ErrorWrapper>
          <Error>{ errorMessage && errorMessage.message } </Error>
          {/* <small>{email} / {password}</small> */}
        </ErrorWrapper>
      </WrapperHor>
    </Page>
  )
}
