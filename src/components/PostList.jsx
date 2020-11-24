import React from 'react'
import PostListItem from './PostListItem'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  margin: 30px 5px;
  border-collapse: collapse;
`
const HeadRow = styled.tr`
  background-color: #495464;
  padding: 18px;
`
const Title = styled.th`
  color: #f4f4f2;
  width: 70%;
`
const Author = styled.th`
  color: #f4f4f2;
  width: 30%;
`

export default function PostList(props) {
  return (
    <Table>
      <HeadRow>
        <Title>Title</Title>
        <Author>Author</Author>
      </HeadRow>
      { 
        props.postList.map( (post, index) => {
          return <PostListItem key={index} post={post} />
        })
      }
    </Table>
  )
}