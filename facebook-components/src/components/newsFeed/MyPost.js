import React, { Component } from "react";
import EditPostForm from "./EditPostForm";
import CommentIndex from "./comment/CommentIndex";
import UserIco from "../header/account/UserIco";
import UserName from "../header/account/UserName";
import './MyPost.css';

class MyPost extends Component {
  render() {
    const { id, message, edit, like, onEdit, onChange, post, setPost, setPostToggle, onBlurHandle, onFocusHandle, toggleLike } = this.props;
    return (
      <li className="postList">
        <div className="postList-list">
          <div className="postList-title">
            <div className="postList-info">
              <div className="postList-info-userIco">
                <UserIco />
              </div>
              <div className="postList-info-box">
                <div className="postList-info-userName">
                  <UserName />
                </div>
                <div className="postList-info-timer">
                  {/* <TimeAgo /> */}
                </div>
                <div className="postList-info-set">전체보기/나만보기</div>
              </div>
            </div>
            <div className="postList-info-set-box">
              <button 
                type="button" 
                className="postList-set-btn"
                onClick={()=>setPostToggle(id)}
                onBlur={()=>onBlurHandle(id)}
              />
              {
              setPost&&
                <ul className="postList-set-box">
                  <li className="postList-set-list">
                    <button 
                    type="button" 
                    className="postList-set-list-btn"
                    onFocus={()=>onFocusHandle(id)}
                    onClick={()=>onEdit(id)}
                    >
                      게시물 수정
                    </button>
                  </li>
                  <li className="postList-set-list">
                    <button 
                      type="button"
                      className="postList-set-list-btn"
                      onFocus={()=>onFocusHandle(id)}
                      >
                        게시물 삭제
                      </button>
                  </li>
                </ul>
              }
            </div>
          </div>
          <div className="postList-content">
            {message}
          </div>
          {
            like&&
            <div className="postlist-like">
              <UserName />
            </div>
          }
        </div>
        <ul className="postList-btn">
          <li className="postList-btn-list">
            <button 
              type="button" 
              className="postList-btn-list-txt"
              onClick={()=>toggleLike(id)}
            >
              좋아요
            </button>
          </li>
          <li className="postList-btn-list">
            <button type="button" className="postList-btn-list-txt">댓글</button>
          </li>
        </ul>
        <CommentIndex />
        {
          edit&&
          <div className="postList-content-edit">
            <EditPostForm 
              id={id} 
              setPost={setPost}
              message={message} 
              onChange={onChange}
            />
          </div>
        }
      </li>
    );
  }
}

export default MyPost;
