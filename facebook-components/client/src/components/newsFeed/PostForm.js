import React, { Component } from 'react';
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
      ],
      feedScope : false,
      storyScope : false,
      submit: false
      // form: [
      //   {
      //   feedScope : false,
      //   storyScope : false,
      //   submit: false
      //   }
      // ]
    };
    this.timeOutId = null
  }

  handleUserInput = e => {
    const { submit } = this.state;
    // if (e.target.value == "") {
    //     return true;
    // }
    // submit: true
    this.setState({
      post: { message: e.target.value },
      submit: true
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

  feedToggle = () => {
    const { feedScope } = this.state;
    this.setState({
      feedScope: !feedScope,
      storyScope: false
    });
  };

  storyToggle = () => {
    const { storyScope } = this.state;
    this.setState({
      storyScope: !storyScope,
      feedScope: false
    })
  }

  onBlurToggle = () => {
    // this.timeOutId = setTimeout(()=>{
    //   this.setState({
    //     storyScope: false,
    //     feedScope: false
    //   })
    // })
  }

  onFocusHandle = () => {
    // clearTimeout(this.timeOutId);
  }

  // onSubmit = () => {
  //   const { post, submit } = this.state;
  //   if (post.messa) {
  //     this.setState({
  //       submit: true
  //     });
  //   }
  // }
    
  render() {
    const { feedScope, storyScope, submit } = this.state;
    const { feedToggle, storyToggle, onBlurToggle, onFocusHandle, onSubmit } = this;
    return (
      <React.Fragment>
        <div className="postform-on-bg"></div>
        <div className="postform-wrap postform-on">
          <div className="postform">
            <div className="postform-title">
              <label for="postform-input">게시물 만들기</label>
              {/* <button type="button" className="postform-close">닫기</button> */}
            </div>
            <div className="postform-textarea">
              <span className="postform-userIco">
                <UserIco />
              </span>
              <textarea
                id="postform-input"
                className="postform-input postform-input-on"
                placeholder="EunJi님, 무슨 생각을 하고 계신가요?"
                value={this.state.post.message}
                onChange={this.handleUserInput}
                // onFocus={()=>onSubmit()}
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
                <label for="postform-checkbox-feed" className="postform-opt-list-select" 
                // tabindex="0"
                >
                  <span className="postform-opt-list-name">뉴스피드</span>
                </label>
                <div className="postform-opt-box">
                  <button 
                    type="button" 
                    className={feedScope?"postform-opt-box-selected selected-on":"postform-opt-box-selected"}
                    onClick={()=>feedToggle()}
                    >
                      전체 공개
                  </button>
                  {
                    feedScope&&
                    (<div className="postform-opt-box-opacity">
                      <ul className="postform-opt-box-list">
                        <li 
                          className="postform-opt-box-item"
                          onFocus={()=>onFocusHandle()}
                        >
                          <em className="postform-opt-box-item-title">전체 공개</em>
                          <br/>
                          Facebook 내외의 모든 사람
                        </li>
                        <li 
                          className="postform-opt-box-item"
                          onFocus={()=>onFocusHandle()}
                        >
                          <em className="postform-opt-box-item-title">친구만</em>
                          <br/>
                          회원님의 Facebook 친구
                        </li>
                        <li 
                          className="postform-opt-box-item"
                          onFocus={()=>onFocusHandle()}
                        >
                          <em className="postform-opt-box-item-title">나만 보기</em>
                          <br/>
                          나만보기
                        </li>
                      </ul>
                    </div>)
                  }
                </div>
              </li>
              <li className="postform-opt-list">
                <input id="postform-checkbox-story" className="postform-opt-checkbox" type="checkbox"/>
                  <label for="postform-checkbox-story" className="postform-opt-list-select" 
                  // tabindex="0"
                  >
                    <span className="postform-opt-list-name">내 스토리</span>
                  </label>
                <div className="postform-opt-box">
                  <button 
                    type="button" 
                    className={storyScope?"postform-opt-box-selected selected-on":"postform-opt-box-selected"}
                    onClick={()=>storyToggle()}
                    onBlur={()=>onBlurToggle()}
                    >
                      전체 공개
                  </button>
                  {
                    storyScope &&
                    (<ul className="postform-opt-box-list">
                      <li 
                        className="postform-opt-box-item"
                        onFocus={()=>onFocusHandle()}
                      >
                        <em className="postform-opt-box-item-title">전체 공개</em>
                        <br/>
                        Facebook 내외의 모든 사람
                      </li>
                      <li 
                        className="postform-opt-box-item"
                        onFocus={()=>onFocusHandle()}
                      >
                        <em className="postform-opt-box-item-title">나만 보기</em>
                        <br/>
                        나만보기
                      </li>
                    </ul>)
                  }
                </div>
              </li>
            </ul>
            <button
              disabled={submit?"":"disabled"}
              className={submit?"postform-submit":"postform-submit postform-submit-off"}
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