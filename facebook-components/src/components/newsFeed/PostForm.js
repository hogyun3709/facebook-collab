import React, { Component } from "react";
import "./PostFom.css"
/* Post Form 의 위치는 어디여야할까.. */
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        message: ""
      }
    };
  }

  createPost = e => {
    let tempPost = { message: e.target.value };
    this.setState({
      post:tempPost
    });
  };
  onSubmit = e => {
    this.props.userInputProps(this.state.post)
    this.setState({
      post: {
        message: ""
      }
    })
  }

  render() {
    return (
      <div>
        <div class="ui form">
          <div class="field field-box">
            <label>게시물 만들기</label>
            <textarea
              className="text-box"
              value={this.state.post.message}
              onChange={this.createPost}
            ></textarea>
          </div>
        </div>
        <div class="ui horizontal divider" />

        <div class="ui equal width grid">
          <div class="equal width row">
            <div class="column">
              <div class="ui red segment">사진/동영상</div>
            </div>
            <div class="column">
              <div class="ui orange segment">친구 태그하기</div>
            </div>
          </div>
        </div>

        <div class="ui horizontal divider" />
        <button class="fluid ui button blue" onClick={this.onSubmit}>게시</button>
      </div>
    );
  }
}

export default PostForm;
