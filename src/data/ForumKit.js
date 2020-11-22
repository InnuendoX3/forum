class Auth {
  BASE_URL = 'https://lab.willandskill.eu'
  POSTS_URL = `${this.BASE_URL}/api/v1/forum/posts/`

  TOKEN_KEY = 'JWT_TOKEN'

  fetchPostList(url = this.POSTS_URL) {
    const fetchOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      }
    }
    return fetch(url, fetchOptions)
    .then( resp => resp.json())
    .then( data => data)
  }

  getToken() {
    return sessionStorage.getItem(this.TOKEN_KEY)
  }

}

export default new Auth