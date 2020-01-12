import React, { Component } from 'react';
// import { Link, BrowserRouter as Router } from "react-router-dom";
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
      <React.Fragment>
      <div className="postform-on-bg"></div>
      <div className="postform-wrap postform-on">
        <div className="postform">
          <div className="postform-title">
            <label for="postform-input">게시물 만들기</label>
            <button type="button" className="postform-close">닫기</button>
          </div>
          <div className="postform-textarea">
            {/* <Link 
              to="/User"
              className="postform-userIco"
            > */}
            <span className="postform-userIco">
              <UserIco />
            </span>
            {/* </Link> */}
            <textarea
              id="postform-input"
              className="postform-input postform-input-on"
              placeholder="EunJi님, 무슨 생각을 하고 계신가요?"
              value={this.state.post.message}
              onChange={this.handleUserInput}
            />
          </div>
        </div>
        <div className="postform-items">
          <button type="button" className="postform-item">
            사진/동영상
          </button>
          <button type="button" className="postform-item">
            친구 태그하기
          </button>
          <button type="button" className="postform-item">
            기분/활동
          </button>
          <button type="button" className="postform-item">
            더보기
          </button>
        </div>
        <div className="postform-opts">
          <ul className="postform-opt">
            <li className="postform-opt-list">
              <input  type="checkbox" id="postform-checkbox-feed" className="postform-opt-checkbox"/>
              <label for="postform-checkbox-feed" className="postform-opt-list-select" tabindex="0">
                <span className="postform-opt-list-name">뉴스피드</span>
              </label>
              <div className="postform-opt-box">
                <button type="button" className="postform-opt-box-selected">전체 공개</button>
                  <div className="postform-opt-box-opacity">
                    <ul className="postform-opt-box-list">
                      <li className="postform-opt-box-item">
                        <em className="postform-opt-box-title">전체 공개</em>
                        <br/>
                        Facebook 내외의 모든 사람
                      </li>
                      <li className="postform-opt-box-item">
                        <em className="postform-opt-box-title">친구만</em>
                        <br/>
                        회원님의 Facebook 친구
                      </li>
                      <li className="postform-opt-box-item">
                        <em className="postform-opt-box-title">나만 보기</em>
                        <br/>
                        나만보기
                      </li>
                    </ul>
                  </div>
              </div>
            </li>
            <li className="postform-opt-list">
              <input id="postform-checkbox-story" className="postform-opt-checkbox" type="checkbox"/>
                <label for="postform-checkbox-story" className="postform-opt-list-select" tabindex="0">
                  <span className="postform-opt-list-name">내 스토리</span>
                </label>
              <div className="postform-opt-box">
                <button type="button" className="postform-opt-box-selected">전체 공개</button>
                <ul className="postform-opt-box-list">
                  <li className="postform-opt-box-item">
                    <em className="postform-opt-box-title">전체 공개</em>
                    <br/>
                    Facebook 내외의 모든 사람
                  </li>
                  <li className="postform-opt-box-item">
                    <em className="postform-opt-box-title">나만 보기</em>
                    <br/>
                    나만보기
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <button
            // disabled={?none:disabled}
            // className={?postform-submit:postform-submit postform-submit-off}
            className="postform-submit"
            onClick={this.onSubmit}
          >
              게시
          </button>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default PostForm;
