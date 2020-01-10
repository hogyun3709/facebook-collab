import React, { Component } from "react";
import PostForm from "./PostForm";
import MyPost from "./MyPost"
import "./PostList.css";


class PostList extends Component {
  id = 0;
  constructor(props) {
    super(props);
    this.state = {
      postItems: [],
      totalPosts: []
    };
  }
  createUniquePostID() {
    const allIDs = [];
    const ID = window.crypto.getRandomValues(new Uint32Array(5));
    const checkSingularity = allIDs.map(x => x === ID)
    allIDs.push(ID);
    // if(checkSingularity.length === 1){
    //   /* excute function recursively? */
    //   allIDs.
    // } else {
    //   return ID
    // }
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
        message: messageObj.message,
        edit: false
      })
    });
  };

  handleEdit = id => {
    const { postItems } = this.state;
    const chosenIndex = postItems.findIndex(
      i => i.id === id
    )
    postItems[chosenIndex].edit = true;
    this.setState({
      postItems: postItems
    })
  }
  isEdited = (value, id) => {
    const {postItems} = this.state;
    const chosenIndex = postItems.findIndex(
      i => i.id === id
    )
    postItems[chosenIndex].edit = false;
    postItems[chosenIndex].message = value;
    this.setState({
      postItems: postItems
    })
  }


  render() {
    const { postItems } = this.state
    return (
      <div className="postList-wrap">
        <PostForm userInputProps={this.userInput} />
        {this.state.postItems
          .map(post =>
            <MyPost
              {...post}
              key={postItems.id}
              onEdit={this.handleEdit}
              onChange={this.isEdited}
              />)
          .reverse()}
      </div>
    );
  }
}
// {this.state.totalPosts.map(totalPost => (
//   <TotalPost totalPostProps={totalPost} />
// ))}

export default PostList;
