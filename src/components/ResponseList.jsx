import React from 'react'
import ResponseSingle from './ResponseSingle'

export default function ResponseList(props) {
  const {responseList} = props
  return (
    <div>
      {
        responseList.map((response, index) => {
          return <ResponseSingle key={index} response={response} />
        })
      }
    </div>
  )
}