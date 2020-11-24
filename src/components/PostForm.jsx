import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Forum from '../data/ForumKit'


import Form from './styled/Form'
import Select from './styled/Select'
import SubmitButton from './styled/SubmitButton'
import TextArea from './styled/TextArea'
import TextInput from './styled/TextInput'

/**
 * Render a form for create a New Post
 * Props Categories comes from the API
 */
export default function PostForm(props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] =useState('1')
  const { categories } = props

  let history = useHistory()

  async function handleFormSubmit(e) {
    e.preventDefault()
    const newPost = {
      title: title,
      content: content,
      category: category
    }
    const postCreated = await Forum.createPost(newPost)

    // Redirect with history.push
    if(postCreated.id){
      history.push(`/posts/${postCreated.id}`)
    } else {
      console.log('Something went wrong!')
    }
  }

  function handleTitle(e) {
    setTitle(e.target.value)
  }

  function handleContent(e) {
    setContent(e.target.value)
  }

  function handleCategory(e) {
    setCategory(e.target.value)
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <TextInput type="text" name="title" onChange={handleTitle} placeholder="Title" required />
      <TextArea name="content" onChange={handleContent} placeholder="Content" rows="4" cols="50" required />
      <Select name="categories" onChange={handleCategory} >
        { categories && categories.map((category, index) => {
          return <option value={category.id} key={index}>{category.title}</option>
        })}
      </Select>
      <SubmitButton value='Send' />
    </Form>
  )
}
