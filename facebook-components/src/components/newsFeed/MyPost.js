import React, { Component } from "react";
import EditPostForm from "./EditPostForm";
import CommentForm from "./comment/CommentForm";

class MyPost extends Component {
  render() {
    const { id, message, edit, onEdit, onChange, post } = this.props;
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
            {edit ? (
              <div>
                <h2>Edit</h2>
                <EditPostForm id={id} message={message} onChange={onChange} />
              </div>
            ) : (
              <div>{message}</div>
            )}

            <button onClick={(e) => onEdit(id)}>Edit</button>
          </div>
          <div class="ui horizontal divider" />
        </div>
        <div class="extra content_a">
          <CommentForm />
          {/* <div class="ui large transparent left icon input">
            <i class="heart outline icon"></i>
            <input type="text"placeholder="Add Comment..." />
          </div> */}
        </div>
      </div>
    );
  }
}

export default MyPost;
