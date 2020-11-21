import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'

export default function HomePage() {
  const { userInfo } = useContext(UserContext)

  return (
    <div>
      <h1>Home Page</h1>
      <h2> {`Hi, ${userInfo.firstName} ${userInfo.lastName}`} </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Animi repellat iure labore quia voluptates pariatur similique 
        veritatis eligendi delectus laboriosam vitae a quas nihil possimus, 
        praesentium ab fuga ducimus et!
      </p>
      <Link to='/posts'>See all posts</Link>
    </div>
  )
}
