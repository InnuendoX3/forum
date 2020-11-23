import React from 'react'

export default function ResponseSingle(props) {
  const { response } = props
  const author = response.author ? `${response.author.firstName} ${response.author.lastName}` : '---'
  return (
    <div>
      <h3> {response.title} </h3>
      <p> By {author}</p>
      <p> {response.content} </p>
    </div>
  )
}