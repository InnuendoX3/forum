class Auth {
  BASE_URL = 'https://lab.willandskill.eu/'
  AUTH_URL = `${this.BASE_URL}api/v1/auth/api-token-auth/`

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

  setToken(token) {
    sessionStorage.setItem(this.TOKEN_KEY, token)
  }


}


export default new Auth()