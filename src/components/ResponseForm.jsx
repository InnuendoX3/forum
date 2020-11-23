import React, { useState } from 'react'
import Forum from '../data/ForumKit'

/**
 * For my information:
 * props.history only appears if the component
 * has been passed as prop:  component={}
 * (Dynamic routing) when routing
 */

// TODO: Send responses // Props for history
export default function ResponseForm(props) {
  const postId = props.postId
  const [title, setTitle] = useState('')
  const [response, setResponse] = useState('')

  function handleTitle(e) {
    setTitle(e.target.value)
  }
  function handleResponse(e) {
    setResponse(e.target.value)
  }

  async function tempHandleSubmitTestHistory() {
    const newResponse = {
      title: title,
      content: response,
      parent: postId
    }
    const resp = await Forum.createPost(newResponse)
    console.log(resp)

    // Redirect to the responded Post
    props.history.push(`/posts/${postId}`)
  }

  return (
    <form onSubmit={tempHandleSubmitTestHistory}>
      <input type="text" onChange={handleTitle} placeholder="Title" required/>
      <textarea onChange={handleResponse} placeholder="Reply" required/>
      <button>Send</button>
    </form>
  )
}
