import React, { useState, useEffect } from 'react'

const EditPostForm = props => {
  const [ post, setPost ] = useState(props.currentPost)
  /*postProps.message 가 이상하다*/
  console.log(props.message)
  /* use effect takes the role of componentDidMount and componentDidUpdate lifecycle */
  useEffect(
    () => {
      setPost(props.currentPost)
    },
    /* takes the role of comparing prevProps's post and current post*/
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { message, value } = event.target

    setPost({ ...post, [message]: value })
  }
  /* post 의 id 가 0으로 고정되는 상황 (edit 으로 넘어왔을시에만)*/
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
