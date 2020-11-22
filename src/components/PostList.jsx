import React from 'react'
import PostListItem from './PostListItem'

export default function PostList(props) {
  return (
    <>
      { 
        props.postList.map( (post, index) => {
          return <PostListItem key={index} post={post} />
        })
      }
    </>
  )
}