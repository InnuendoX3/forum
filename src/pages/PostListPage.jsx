import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Forum from '../data/ForumKit'
import PostList from '../components/PostList'

// TODO: Show links for more post, when more than 30
export default function PostListPage() {
  const [postList, setPostList] = useState(null)

  async function fetchPostList() {
    const postList = await Forum.fetchPostList()
    console.log('postList completo', postList)
    setPostList(postList.results)
  }

  useEffect(() => {
    fetchPostList()
  }, [])

  return (
    <div>
      <h1>Post List page</h1>
      <Link to='/posts/create'>Create a Post</Link>
      { postList && <PostList postList={postList} />}
    </div>
  )
}
