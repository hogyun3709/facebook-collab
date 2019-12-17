import React, { useState, useEffect } from 'react'

const EditPostForm = props => {
  const [ post, setPost ] = useState(props.currentPost)

  useEffect(
    () => {
      setPost(props.currentPost)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { message, value } = event.target

    setPost({ ...post, [message]: value })
  }
  console.log(post.id)
  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updatePost(post.id, post)
      }}
    >
      <label>Post</label>
      <input type="text" name="post" value={post.message} onChange={handleInputChange} />
      <button>Update Post</button>
      <button onClick={() => props.setEdit(false)} className="">
        Cancel
      </button>
    </form>
  )
}

export default EditPostForm
