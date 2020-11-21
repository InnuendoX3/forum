import React, {useEffect, useState} from 'react'

import Forum from '../data/ForumKit'
import PostList from '../components/PostList'

export default function PostListPage() {
  const [postList, setPostList] = useState(null)

  async function fetchPostList() {
    const postList = await Forum.fetchPostList()
    //console.log(postList.results)
    setPostList(postList.results)
  }

  useEffect(() => {
    fetchPostList()
  }, [])

  return (
    <div>
      <h1>Post List page</h1>
      { postList && <PostList postList={postList} />}
    </div>
  )
}
