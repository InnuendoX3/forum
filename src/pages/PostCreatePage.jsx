import React, { useEffect, useState } from 'react'
import Forum from '../data/ForumKit'

import PostForm from '../components/PostForm'


export default function PostCreatePage(props) {
  
  const [categories, setCategories] = useState(null)
  async function getCategories() {
    const categoriesFetched = await Forum.fetchCategories()
    setCategories(categoriesFetched)
  }
  
  useEffect(() => {
    getCategories()
  }, [])
  

  return (
    <PostForm categories={categories}/>
  )
}