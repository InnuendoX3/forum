import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Forum from '../data/ForumKit'

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
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="title" onChange={handleTitle} placeholder="Title" required />
      <textarea name="content" onChange={handleContent} placeholder="Content" rows="4" cols="50" required />
      <select name="categories" onChange={handleCategory} >
        { categories && categories.map((category, index) => {
          return <option value={category.id} key={index}>{category.title}</option>
        })}
      </select>
      <button>Send</button>
    </form>
  )
}
