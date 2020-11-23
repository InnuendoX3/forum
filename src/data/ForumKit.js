class Forum {
  BASE_URL = 'https://lab.willandskill.eu'
  POSTS_URL = `${this.BASE_URL}/api/v1/forum/posts/`
  CATEGORIES_URL = `${this.BASE_URL}/api/v1/forum/categories/`

  TOKEN_KEY = 'JWT_TOKEN'

  fetchPostList(url = this.POSTS_URL) {
    const fetchOptions = {
      headers: this.getPrivateHeaders()
    }
    return fetch(url, fetchOptions)
    .then( resp => resp.json())
    .then( data => data)
  }

  fetchPostDetails(postId) {
    const detailUrl = `${this.POSTS_URL}${postId}/`
    const fetchOptions = {
      headers: this.getPrivateHeaders()
    }
    return fetch(detailUrl, fetchOptions)
    .then( resp => resp.json())
    .then( data => data)
  }

  fetchCategories() {
    const fetchOptions = {
      headers: this.getPrivateHeaders()
    }    
    return fetch(this.CATEGORIES_URL, fetchOptions)
    .then( resp => resp.json())
    .then( data => data.results)
  }

  createPost(newPost) {
    const fetchOptions = {
      method: 'post',
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(newPost)
    }
    return fetch(this.POSTS_URL, fetchOptions)
    .then( resp => resp.json())
    .then( data => data)
  }

  getToken() {
    return sessionStorage.getItem(this.TOKEN_KEY)
  }

  getPrivateHeaders() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    }
  }

}

export default new Forum()