import React, { Component } from "react";
import UserIco from '../header/account/UserIco';
import "./PostFom.css";
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [
        {
          message: ""
        }
      ]
    };
  }

  handleUserInput = e => {
    this.setState({
      post: { message: e.target.value }
    });
  };

  onSubmit = e => {

    this.props.userInputProps(this.state.post);
    this.setState({
      post: {
        message: ""
      }
    });
  };

  render() {
    return (
      <div className="postform">
        <div className="postform-textarea">
          <div className="postform-title">
            <label for="postform-input">게시물 만들기</label>
            <span className="postform-close">작성종료</span>
          </div>
          <span className="postform-userIco">
            <UserIco />
          </span>
          <textarea
            id="postform-input"
            className="postform-input"
            placeholder="EunJi님, 무슨 생각을 하고 계신가요?"
            value={this.state.post.message}
            onChange={this.handleUserInput}
          />
        </div>
        <ul clasNames="postform-items">
          <li className="postform-item">사진/동영상</li>
          <li className="postform-item">친구 태그하기</li>
          <li className="postform-item">기분/활동</li>
          <li className="postform-item">더보기</li>
        </ul>
        <div className="postform-submit-opt">
          <ul className="postform-opts">
            <li className="postform-opt">뉴스피드</li>
            <li className="postform-opt">내 스토리</li>
          </ul>
          <button 
            className="postform-submit"
            onClick={this.onSubmit}
          >
              게시
          </button>
        </div>
      </div>
    );
  }
}

export default PostForm;
