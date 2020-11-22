import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Forum from '../data/ForumKit'
import PostList from '../components/PostList'

// TODO: Show links for more post, when more than 30
export default function PostListPage() {
  const [postList, setPostList] = useState(null)

  async function fetchPostList(url) {
    const postListFetched = await Forum.fetchPostList(url)
    console.log('postList completo', postListFetched)
    console.log('postListFetched.next', postListFetched.next)
    console.log('postListFetched.previous', postListFetched.previous)
    setPostList(postListFetched)
  }

  useEffect(() => {
    fetchPostList()
  }, [])

  function handleNext() {
    fetchPostList(postList.next)
  }
  function handlePrevious() {
    fetchPostList(postList.previous)

  }

  return (
    <div>
      <h1>Post List page</h1>
      <Link to='/posts/create'>Create a Post</Link>
      {
        postList && (
          <>
            <div>
              { postList.previous && <button onClick={handlePrevious}>Previous Posts</button>}
              { postList.next && <button onClick={handleNext}>Next Posts</button>}
            </div>
            <PostList postList={postList.results} /> 
          </>
        )
      }


    </div>
  )
}
