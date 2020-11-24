import React from 'react'
import styled from 'styled-components'

import LinkButton from './styled/LinkButton'
import Title from './styled/Title'


const PostStyled = styled.div`
  display: grid;
  grid-template-areas:  'thetitle thetitle thetitle'                         
                        'pcontent pcontent pcontent'
                        'general author category'
                        'backlink backlink backlink';
`
const PostTitle = styled(Title)`
  text-align: center;
  grid-area: thetitle;
  margin: 25px 0 0 0;
  
  `
const BackLink = styled(LinkButton)`
  margin: 20px 0px;
  grid-area: backlink;
  `
const Content = styled.div`
  text-align: center;
  grid-area: pcontent;
`
const By = styled.p`
  margin: 2px 0;
  `
const Created = styled.p`
  margin: 2px 0;
`
const SubContent = styled.p`
  text-align: justify;
`
const MetaOne = styled.div`
  grid-area: general;
  color: #6b6b6b;
  justify-self: center;
  `
const MetaTwo = styled.div`
  grid-area: author;
  color: #6b6b6b;
  justify-self: center;
  `
const MetaThree = styled.div`
  grid-area: category;
  color: #6b6b6b;
  justify-self: center;
`


export default function PostSingle(props) {
  const { post } = props
  const author = post.author ? `${post.author.firstName} ${post.author.lastName}` : '---'

  return (
    <PostStyled>
      <PostTitle> {post.title} </PostTitle>
      <BackLink to='/posts'>Back to all posts</BackLink>
      <Content>
        <Created> {post.createdAt} </Created>
        <By><strong>By {author}</strong></By>
        <SubContent> {post.content} </SubContent>
      </Content>
      {/* Render rest of Post metadata */}
      <MetaOne>
        <h4>Gral Metadata</h4>
        <div><code><strong>countResponses</strong>: {post.countResponses}</code></div>
        <div><code><strong>country</strong>: {post.country}</code></div>
        <div><code><strong>id</strong>: {post.id}</code></div>
        <div><code><strong>isClosed</strong>: {post.isClosed}</code></div>
        <div><code><strong>isPinned</strong>: {post.isPinned}</code></div>
        <div><code><strong>updatedAt</strong>: {post.updatedAt}</code></div>
        <div><code><strong>userSubcriptionUpdated</strong>: {post.userSubcriptionUpdated}</code></div>
        <div><code><strong>userSubscribed</strong>: {post.userSubscribed}</code></div>
        <div><code><strong>viewCount</strong>: {post.viewCount}</code></div>
      </MetaOne>      
      <MetaTwo>
        <h4>Author Metadata</h4>
        {
          post.author && Object.entries(post.author).map((infoItem, index) => {
            return <div key={index}><code><strong>{infoItem[0]}</strong>: {infoItem[1]}</code></div>
          })
        }
      </MetaTwo>
      <MetaThree>
        <h4>Category Metadata</h4>
        {
          post.category && Object.entries(post.category).map((infoItem, index) => {
            return <div key={index}><code><strong>{infoItem[0]}</strong>: {infoItem[1]}</code></div>
          })
        }
      </MetaThree>
    </PostStyled>
  )
}