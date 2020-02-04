import React, { Component } from "react";
import PostForm from "./PostForm";
import MyPost from "./MyPost";
import "./PostList.css";

class PostList extends Component {
  id = 0;
  constructor(props) {
    super(props);
    this.state = {
      postItems: [],
      totalPosts: []
    };
    this.timeOutId = null;
  }
  // createUniquePostID() {
  //   /* id를 관리하는 state을 params로 받아서 관리해야함 함수실행시 allIDs 가 리셋됨*/
  //   const allIDs = [];
  //   // const IdArrays = window.crypto.getRandomValues(new Uint32Array(10));
  //   const IdArrays = [0,1,2];
  //   const ID = IdArrays[Math.floor(Math.random() * IdArrays.length)]
  //   const checkSingularity = allIDs.map(x => x === ID);
  //   const numberofAllIds = allIDs.push(ID);
  //   console.log(allIDs)
  //
  //   if (checkSingularity.length === 1) {
  //     console.log("regenerate Id")
  //     return createUniquePostID();
  //   } else return ID;
  // }
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
        setPost: false,
        edit: false,
        like: false
        // focusReply: false
      })
    });
  };

  handleEdit = id => {
    const { postItems } = this.state;
    const chosenIndex = postItems.findIndex(i => i.id === id);
    postItems[chosenIndex].edit = true;
    this.setState({
      postItems: postItems
    });
  };
  isEdited = (value, id) => {
    const { postItems } = this.state;
    const chosenIndex = postItems.findIndex(i => i.id === id);
    postItems[chosenIndex].edit = false;
    postItems[chosenIndex].message = value;
    this.setState({
      postItems: postItems
    });
  };

  setPostToggle = id => {
    const { postItems } = this.state;
    const chosenIndex = postItems.findIndex(i => i.id === id);
    postItems[chosenIndex].setPost = !postItems[chosenIndex].setPost;
    this.setState({
      postItems: postItems
    });
  };

  onBlurHandle = id => {
    const { postItems } = this.state;
    const chosenIndex = postItems.findIndex(i => i.id === id);
    this.timeOutId = setTimeout(() => {
      postItems[chosenIndex].setPost = false;
      this.setState({
        postItems: postItems
      });
    })
  }

  onFocusHandle = id => {
    const { postItems } = this.state;
    const chosenIndex = postItems.findIndex(i => i.id === id);
    clearTimeout(this.timeOutId);
  }

  toggleLike = id => {
    const { postItems } = this.state;
    const chosenIndex = postItems.findIndex(i => i.id === id);
    postItems[chosenIndex].like = !postItems[chosenIndex].like;
    this.setState({
      postItems: postItems
    });
  }

  // autoFocusToggle = (id) => {
  //   const { postItems } = this.state;
  //   const chosenIndex = postItems.findIndex(i => i.id === id);
  //   postItems[chosenIndex].focusReply = true;
  //   this.setState({
  //     postItems: postItems
  //   });
  // }
  
  render() {
    const { postItems } = this.state;
    return (
      <div className="postwrap postwrap-on">
        <PostForm 
          userInputProps={this.userInput} 
          />
        <ul className="postList-wrap">
          {this.state.postItems.map(post => (
            <MyPost
              {...post}
              key={postItems.id}
              onEdit={this.handleEdit}
              onChange={this.isEdited}
              setPostToggle={this.setPostToggle}
              onBlurHandle={this.onBlurHandle}
              onFocusHandle={this.onFocusHandle}
              toggleLike={this.toggleLike}
              // autoFocusToggle={this.autoFocusToggle}
            />
          ))}
        </ul>
      </div>
    );
  }
}
// {this.state.totalPosts.map(totalPost => (
//   <TotalPost totalPostProps={totalPost} />
// ))}

export default PostList;
