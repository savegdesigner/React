import React, { useEffect, useState } from "react"

import Postitem from "./PostItem"

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      response.json().then((data) => {
        setPosts(data)
      })
    })
  }, [])

  return (
    <>
      <input placeholder="New post" value={newPost} onChange={(e) => setNewPost(e.target.value)} type="text" />
      <ul>
        {posts.map((post) => (
          <Postitem key={post.id} post={post} />
        ))}
      </ul>
    </>
  )
}

export default PostList
