import React, { useEffect, useState } from 'react'
import Forum from '../data/ForumKit'
import styled from 'styled-components'

import PostForm from '../components/PostForm'
import Page from '../components/styled/Page'

const PageCenter = styled(Page)`
  min-height: 70vh;
`


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
    <PageCenter>
      <PostForm categories={categories}/>
    </PageCenter>
  )
}