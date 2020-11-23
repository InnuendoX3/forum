import React from 'react'

export default function PostSingle(props) {
  const { post } = props
  const author = post.author ? `${post.author.firstName} ${post.author.lastName}` : '---'

  return (
    <div>
      <h1> {post.title} </h1>
      <p><strong>By {author}</strong></p>
      <p> {post.createdAt} </p>
      <p> {post.content} </p>
      {/* Render rest of Post metadata */}
      <h3>Metadata</h3>
      <div>
        <h4>All</h4>
        <div><code><strong>countResponses</strong>: {post.countResponses}</code></div>
        <div><code><strong>country</strong>: {post.country}</code></div>
        <div><code><strong>id</strong>: {post.id}</code></div>
        <div><code><strong>isClosed</strong>: {post.isClosed}</code></div>
        <div><code><strong>isPinned</strong>: {post.isPinned}</code></div>
        <div><code><strong>updatedAt</strong>: {post.updatedAt}</code></div>
        <div><code><strong>userSubcriptionUpdated</strong>: {post.userSubcriptionUpdated}</code></div>
        <div><code><strong>userSubscribed</strong>: {post.userSubscribed}</code></div>
        <div><code><strong>viewCount</strong>: {post.viewCount}</code></div>
      </div>      
      <div>
        <h4>Author</h4>
        {
          post.author && Object.entries(post.author).map((infoItem, index) => {
            return <div key={index}><code><strong>{infoItem[0]}</strong>: {infoItem[1]}</code></div>
          })
        }
      </div>
      <div>
        <h4>Category</h4>
        {
          post.category && Object.entries(post.category).map((infoItem, index) => {
            return <div key={index}><code><strong>{infoItem[0]}</strong>: {infoItem[1]}</code></div>
          })
        }
      </div>
    </div>
  )
}