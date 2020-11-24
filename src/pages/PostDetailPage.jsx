import React, { useEffect, useState } from 'react'
import Forum from '../data/ForumKit'

import PostSingle from '../components/PostSingle'
import ResponseForm from '../components/ResponseForm'
import ResponseList from '../components/ResponseList'

import Page from '../components/styled/Page'
import WrapperHor from '../components/styled/WrapperHor'


export default function PostDetailPage(props) {
  // console.log('props.history', props.history)
  const postId = props.match.params.id
  const [ postDetails, setPostDetails ] = useState({})

  async function getPostDetails() {
    const details = await Forum.fetchPostDetails(postId)
    // console.log('details', details)
    setPostDetails(details)
  }

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <Page>
      <WrapperHor>
        <PostSingle post={postDetails} />
        {/* TODO: Send Response */}
        <ResponseForm history={props.history} postId={postId} />
        <h2>--Responses--</h2>
        {
          postDetails.responses && <ResponseList responseList={postDetails.responses} />
        }
      </WrapperHor>
    </Page>
  )
}