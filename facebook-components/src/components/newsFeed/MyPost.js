import React, { Component } from "react";
import EditPostForm from "./EditPostForm";
import CommentIndex from "./comment/CommentIndex";
import UserIco from "../header/account/UserIco";
import UserName from "../header/account/UserName";
import './MyPost.css';

class MyPost extends Component {
  render() {
    const { id, message, edit, onEdit, onChange, post } = this.props;
    return (
      <li className="postList">
        <div className="postList-content">
          <div className="postList-title">
            <div className="postList-user">
              <div className="postList-userIco">
                <UserIco />
              </div>
              <UserName />
              {/* <TimeAgo /> */}
              <span className="">전체보기/나만보기</span>
            </div>
            <div className="postList-set-btn">
              <ul className="postList-set-box">
                <li className="postList-set-list">게시물 삭제</li>
                <li className="postList-set-list">개사물 수정</li>
              </ul>
            </div>
          </div>
          <div className="postList-content">
            {edit ? 
            (
              <div className="postList-content-edit">
                <EditPostForm 
                  id={id} 
                  message={message} 
                  onChange={onChange}
                />
              </div>
            ) : (
              <div className="">
                {message}
              </div>
            )}
            <button 
              className=""
              onClick={
                (e) => onEdit(id)
            }>
              게시물 수정
            </button>
          </div>
        </div>
        <div className="postList-btn">
          <button className="postList-btn-list">좋아요</button>
          <button className="postList-btn-list">댓글</button>
        </div>
        <CommentIndex />
      </li>
    );
  }
}

export default MyPost;
