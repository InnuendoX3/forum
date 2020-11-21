import React from 'react'

export default function PostList(props) {
  return (
    <div>
      { 
        props.postList.map( (post, index) => {
          return <div key={index}> {post.title} </div>
        })
      }
    </div>
  )
}