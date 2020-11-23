import React from 'react'
import { Link } from 'react-router-dom'

export default function PostListItem(props) {
  const { post } = props
  const postTitle = post.title
  const postId = post.id
  const authorName = post.author ? `${post.author.firstName} ${post.author.lastName}` : '---'
  //console.log('post author email', post.author.email)  
  return (
    
      <div>
        <p><strong> {postTitle} </strong></p>
        <p> {authorName} </p>
        <Link to={`/posts/${postId}`}>See post</Link>
      </div>
  )
}