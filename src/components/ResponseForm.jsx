import React, { useState } from 'react'
import Forum from '../data/ForumKit'

import Form from './styled/Form'
import SubmitButton from './styled/SubmitButton'
import Subtitle from './styled/Subtitle'
import TextArea from './styled/TextArea'
import TextInput from './styled/TextInput'

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
    <Form onSubmit={tempHandleSubmitTestHistory}>
      <Subtitle>Send a response</Subtitle>
      <TextInput type="text" onChange={handleTitle} placeholder="Title" required/>
      <TextArea rows="4" onChange={handleResponse} placeholder="Reply" required/>
      <SubmitButton value="Response" />
    </Form>
  )
}
