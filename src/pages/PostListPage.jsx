import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Forum from '../data/ForumKit'
import PostList from '../components/PostList'
import Page from '../components/styled/Page'
import Title from '../components/styled/Title'
import LinkButton from '../components/styled/LinkButton'
import Button from '../components/styled/Button'
import WrapperHor from '../components/styled/WrapperHor'

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
    <Page>
      <WrapperHor>
        <Title>Post List page</Title>
        <LinkButton to='/posts/create'>Create a Post</LinkButton>
        {
          postList && (
            <>
              <div>
                { postList.previous && <Button onClick={handlePrevious}>Previous Posts</Button>}
                { postList.next && <Button onClick={handleNext}>Next Posts</Button>}
              </div>
              <PostList postList={postList.results} /> 
            </>
          )
        }
      </WrapperHor>
    </Page>
  )
}
