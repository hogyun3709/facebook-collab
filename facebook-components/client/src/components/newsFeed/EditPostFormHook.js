import React, { useState, useEffect } from "react";

const EditPostForm = props => {
  const [post, setPost] = useState(props.currentPost);

  /* use effect takes the role of componentDidMount and componentDidUpdate lifecycle */
  useEffect(
    () => {
      setPost(props.currentPost);
    },
    /* takes the role of comparing prevProps's post and current post*/
    [props]
  );
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]
  console.log(post);
  // const handleInputChange = event => {
  //   event.preventDefault()
  //   const { message, value } = event.target
  //
  //   setPost({ ...post, [message]: value })
  // }
  const handleInputChange = e => {
    setPost({ post, message: e.target.value });
  };
  console.log(post.id);
  console.log(post.message);
  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updatePost(post.id, post);
      }}
    >
      <label>Post</label>
      <input
        type="text"
        name="post"
        value={post.message}
        onChange={e => handleInputChange(e)}
      />
      <button>Update Post</button>
      <button onClick={() => props.setEdit(false)} className="">
        Cancel
      </button>
    </form>
  );
};

export default EditPostForm;
