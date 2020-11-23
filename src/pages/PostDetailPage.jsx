import React, { useEffect, useState } from 'react'
import PostSingle from '../components/PostSingle'
import ResponseForm from '../components/ResponseForm'
import ResponseList from '../components/ResponseList'

import Forum from '../data/ForumKit'

export default function PostDetailPage(props) {
  const postId = props.match.params.id
  const [ postDetails, setPostDetails ] = useState({})

  async function getPostDetails() {
    const details = await Forum.fetchPostDetails(postId)
    console.log('details', details)
    setPostDetails(details)
  }

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <>
      <PostSingle post={postDetails} />
      {/* TODO: Send Response */}
      <ResponseForm />
      <h2>--Responses--</h2>
      {
        postDetails.responses && <ResponseList responseList={postDetails.responses} />
      }

      
    </>
  )
}