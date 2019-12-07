import React, { Component, useState } from "react";
import PostForm from "./PostForm";
import CommentForm from "./comment/CommentForm";
import "./PostList.css";

const MyPost = ({ postProps }) => {
  const [like, setLike] = useState(0);
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
          <div>{postProps.message}</div>
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
      <div class="extra content">
        <CommentForm />
        {/* <div class="ui large transparent left icon input">
          <i class="heart outline icon"></i>
          <input type="text"placeholder="Add Comment..." />
        </div> */}
      </div>
    </div>
  );
};
const TotalPost= ({ totalPostProps }) => {
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

  userInput = messageObj => {
    let linkArray = this.state.postItems;
    linkArray.unshift(messageObj);
    console.log(messageObj)
    this.setState({ postItems: linkArray });
  };

  render() {
    return (
      <div className="postList-wrap">
        <PostForm userInputProps={this.userInput} />

        {this.state.postItems.map((post) => (
          <MyPost postProps={post} />
        ))}

      </div>
    );
  }
}
// {this.state.totalPosts.map(totalPost => (
//   <TotalPost totalPostProps={totalPost} />
// ))}

export default PostList;
