import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Forum from '../data/ForumKit'
import PostList from '../components/PostList'

// TODO: Show links for more post, when more than 30
export default function PostListPage() {
  const [postList, setPostList] = useState(null)

  async function getPostList(url) {
    const postListFetched = await Forum.fetchPostList(url)
    setPostList(postListFetched)
  }

  useEffect(() => {
    getPostList()
  }, [])

  function handleNext() {
    getPostList(postList.next)
  }
  function handlePrevious() {
    getPostList(postList.previous)

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
