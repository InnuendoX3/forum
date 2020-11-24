import React from 'react'
import styled from 'styled-components'

const Response = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const Title = styled.h3`
  margin: 20px 0 0 0;
`
const By = styled.small`

`
const Content = styled.p`

`


export default function ResponseSingle(props) {
  const { response } = props
  const author = response.author ? `${response.author.firstName} ${response.author.lastName}` : '---'
  return (
    <>
    <Response>
      <Title> {response.title} </Title>
      <By> By {author}</By>
      <Content> {response.content} </Content>
    </Response>
    <hr/>
    </>
  )
}