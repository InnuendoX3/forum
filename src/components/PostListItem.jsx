import React from 'react'

export default function PostListItem(props) {
  const { post } = props
  const postTitle = post.title
  const authorName = post.author ? `${post.author.firstName} ${post.author.lastName}` : '---'
  //console.log('post author email', post.author.email)  
  return (
    <div>
      <p><strong> {postTitle} </strong></p>
      <p> {authorName} </p>
    </div>
  )
}