class Auth {
  BASE_URL = 'https://lab.willandskill.eu'
  AUTH_URL = `${this.BASE_URL}/api/v1/auth/api-token-auth/`
  ME_URL = `${this.BASE_URL}/api/v1/me`
  COUNTRIES_URL = `${this.BASE_URL}/api/v1/countries/`
  REGISTER_URL = `${this.BASE_URL}/api/v1/auth/users/`

  TOKEN_KEY = 'JWT_TOKEN'

  /* 
  *  Return loginResponse   
  *     succeeded: true/false
  *     token: (Token if login succeded)
  *     message: (Message if error)
  */
  login(email, password) {
    const fetchOptions = {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    }

    let loginResponse = {
      succeeded: false,
      token: '',
      message: ''
    }

    return fetch(this.AUTH_URL, fetchOptions)
    .then( resp => {
      loginResponse.succeeded = resp.status === 200
      return resp.json()
    })
    .then( data => {
      const messageFromAPI = Object.values(data)[0][0] // Get the message that API returns when problem
      loginResponse.token = data.token || ''
      loginResponse.message = loginResponse.succeeded ? '' : messageFromAPI
      return loginResponse
    })
  }

  // Register
  createNewUser(newUser) {
    const fetchOptions = {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    }

    let registerResponse = {
      succeeded: false,
      body: null,
      errorMessages: null
    }

    return fetch(this.REGISTER_URL, fetchOptions)
    .then(resp => {
      registerResponse.succeeded = resp.status === 201
      return resp.json()
    })
    .then(data => {
      if(registerResponse.succeeded) {
        registerResponse.body = data
      } else {
        registerResponse.errorMessages = data.email || data.password
      }
      return registerResponse
    })

  }

  setToken(token) {
    sessionStorage.setItem(this.TOKEN_KEY, token)
  }

  getToken() {
    return sessionStorage.getItem(this.TOKEN_KEY)
  }

  removeToken() {
    sessionStorage.removeItem(this.TOKEN_KEY)
  }

  getUserInfo() {
    const fetchOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      }
    }
    return fetch(this.ME_URL, fetchOptions)
    .then( resp => resp.json())
    .then( data => data)
    /** Return
    country: null
    email: "johncito@doe.se"
    firstName: "Johncito"
    id: 45
    lastName: "Doe"
    phoneNumber: null
    title: null
    */
  }

  fetchCountries() {
    const fetchOptions = {
      headers: {'Content-Type': 'application/json'}
    }
    return fetch(this.COUNTRIES_URL, fetchOptions)
    .then( resp => resp.json())
    .then( data => data.results)
  }

}


export default new Auth()