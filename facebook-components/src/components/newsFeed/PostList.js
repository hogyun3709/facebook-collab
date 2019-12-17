import React, { Component, useState } from "react";
import PostForm from "./PostForm";
import EditPostForm from "./EditPostForm";
import CommentForm from "./comment/CommentForm";
import "./PostList.css";

const MyPost = ({ postProps }) => {
  /*
    currentPost 를 못맞춰주고있음.
    componentDidMount 처럼 rendering 전에 postProps를 받으면
    다시금 currentPost 를 업데이트를 시켜야하나 - initialPostState가 아닌 postProps로 받는 값으로 setState.. state값 변경
    hooks 에선 setState을 inlineing 으로 하는 방법말고 다른게 있는가
    posts state 은 추가된 모든 posts obj를 받고.
  */
  // const initialPostState = { id: null, message: '' }

  const [like, setLike] = useState(0);
  const [posts, setPosts] = useState(postProps);
  const [edit, setEdit] = useState(false);
  const [currentPost, setCurrentPost] = useState(postProps);

  /* edit form을 받아서 posts 를 업데이트 해줌 */
  const updatePost = (id, updatedPost) => {
    setEdit(false);
    setPosts(posts.map(post => (post.id === id ? updatedPost : post)));
  };
  /*
    post 에 obj 가 하나씩 덜 들어오는 상황
    posts에 갯수는 맞게 들어오나, id 0, 메세지도 첫 메세지로 고정됨
  */
  // console.log(posts)
  /*
    postProps는
    0, 0 1, 0 1 2, 0 1 2 3 형식으로 들어옴
  */
  console.log(postProps)
  // console.log(currentPost)
    return (
    <div class="ui card fluid">
      <div class="content">
        {/* <div class="right floated meta">14h</div>
        <img class="ui avatar image" src="https://source.unsplash.com/random" /> */}
      </div>
      <div class="image">
        <img />
      </div>
      <div class="content">
        <div class="description">
          {edit ? (
            <div>
              <h2>Edit</h2>
              <EditPostForm
                edit={edit}
                setEdit={setEdit}
                currentPost={currentPost}
                updatePost={updatePost}
              />
            </div>
          ) : (
            <div>{postProps.message}</div>
          )}
          <button onClick={() => setEdit(!edit)}>Edit</button>
        </div>
        <div class="ui horizontal divider" />
        {/* <span class="right floated">
          <i class="comment icon"></i>3 comments
        </span> */}
        <i
          class="heart outline like icon"
          onClick={() => setLike(like + 1)}
        ></i>
        {like} likes
      </div>
      <div class="extra content_a">
        <CommentForm />
        {/* <div class="ui large transparent left icon input">
          <i class="heart outline icon"></i>
          <input type="text"placeholder="Add Comment..." />
        </div> */}
      </div>
    </div>
  );
};
const TotalPost = ({ totalPostProps }) => {
  const [like, setLike] = useState(0);

  return (
    <div class="ui card fluid">
      <div class="content">
        {/* <div class="right floated meta">14h</div> */}
        {/* <img class="ui avatar image" src="https://source.unsplash.com/random" /> */}
      </div>
      <div class="image">
        <img />
      </div>
      <div class="content">
        <div class="description">
          <div>{totalPostProps.body}</div>
        </div>
        <div class="ui horizontal divider" />
        <span class="right floated">
          {/* <i class="comment icon"></i>3 comments */}
        </span>
        <i
          class="heart outline like icon"
          onClick={() => setLike(like + 1)}
        ></i>
        {like} likes
      </div>

      <div class="extra content">


        <CommentForm />

        {/* <div class="ui large transparent left icon input">
          <i class="heart outline icon"></i>
          <input type="text" placeholder="Add Comment..." />
        </div> */}
      </div>
    </div>
  );
};
class PostList extends Component {
  id = 0;
  constructor(props) {
    super(props);
    this.state = {
      postItems: [],
      totalPosts: []
    };
  }
  getPostData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data =>
        this.setState({
          totalPosts: data
        })
      );
  }
  componentDidMount() {
    this.getPostData();
  }
  /* console 에서 평가시점마다 obj 값을 참조 해보기  */
  userInput = messageObj => {
    // messageObj.id = this.id;
    const { postItems } = this.state;
    this.setState({
      postItems: postItems.concat({
        /* this.id 의 존재는 뭔가.. */
        id: this.id++,
        message: messageObj.message
      })
    });
  };
  render() {
    return (
      <div className="postList-wrap">
        <PostForm userInputProps={this.userInput} />

        {this.state.postItems
          .map(post => <MyPost postProps={post} />)
          .reverse()}
      </div>
    );
  }
}
// {this.state.totalPosts.map(totalPost => (
//   <TotalPost totalPostProps={totalPost} />
// ))}

export default PostList;
