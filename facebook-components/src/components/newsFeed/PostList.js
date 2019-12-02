import React, { Component, useState } from "react";
import PostForm from "./PostForm";
import CommentForm from "./comment/CommentForm";
import "./PostList.css"

/* 카드 컴포넌트를 만들고, */
/* This component shows series of post item contents (objects) created by user */
/* post {} < post의 값만 받고오겠다 */
const Card = ({ post }) => {
  const [like, setLike] = useState(0)

  // submitComment() => {
  //   () => setComment("co")
  // }
  //
  // handleUserEnter = e  => {
  //   e.key = e.key || e.keyCode;
  //   if (e.key === 13){
  //     submitComment()
  //   }
  // // }
  return (
    <div class="ui card fluid">
      <div class="content">
        <div class="right floated meta">14h</div>
        <img class="ui avatar image" src="https://source.unsplash.com/random" />
      </div>
      <div class="image">
        <img />
      </div>
      <div class="content">
        <div class="description">
          <div>{post.message}</div>
        </div>
        <div class="ui horizontal divider" />
        <span class="right floated">
          <i class="comment icon"></i>3 comments
        </span>
        <i
          class="heart outline like icon"
          onClick={() => setLike(like + 1)}
        ></i>
        {like} likes
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <i class="heart outline icon"></i>
          <input type="text"placeholder="Add Comment..." />
        </div>
      </div>
    </div>
  );
};
const TempCard = ({ tempPost }) => {
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
          {/* <div>{tempPost.body}</div> */}
        </div>
        <div class="ui horizontal divider" />
        <span class="right floated">
          {/* <i class="comment icon"></i>3 comments */}
        </span>
        <i
          class="heart outline like icon"
          onClick={() => setLike(like + 1)}
        ></i>
        {/* {like} likes */}
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
/* comment 를 결국 parent 에서 handling */
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postItems: [],
      tempPosts: [],
    };
  }
  getPostData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response =>  response.json())
    .then(data =>
      this.setState({
        tempPosts: data
      })
    )
  }
  componentDidMount(){
    this.getPostData();
  }

  temp = obj => {
    let tempArr = this.state.postItems;
    tempArr.push(obj);
    this.setState({ postItems: tempArr });
  };

  render() {
    return (
      <div className="postList-wrap">
        <PostForm temp={this.temp} />

        {this.state.postItems.map(post => (
          <Card post={post} />
        ))}

        {this.state.tempPosts.map(tempPost =>(
          <TempCard tempPost={tempPost} />
        ))}
      </div>
    );
  }
}

export default PostList;
