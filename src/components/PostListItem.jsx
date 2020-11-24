import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TitleLink = styled(Link)`
  color: #495464;
  padding: 2px 5px;
  font-weight: bold;
  text-decoration: none;
`
const Row = styled.tr`
  background-color:#bbbfca;
  &:nth-child(even) {
    background-color: #e8e8e8;
  }
`
const Td = styled.td`
  padding: 8px;
`


export default function PostListItem(props) {
  const { post } = props
  const postTitle = post.title
  const postId = post.id
  const authorName = post.author ? `${post.author.firstName} ${post.author.lastName}` : '---'
  //console.log('post author email', post.author.email)  
  return (    
    <Row>
      <Td><TitleLink to={`/posts/${postId}`}>{postTitle}</TitleLink></Td>
      <Td> {authorName} </Td>
    </Row>
  )
}