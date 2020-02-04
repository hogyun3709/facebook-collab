import React, { Component } from "react";
import PostInput from "./PostInput";
import './EditPostForm.css';

class EditPostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      editmessage: this.props.message
    };
  }

  handleChange = e => {
    this.setState({
      editMessage: e.target.value
    })
  }
  handleEdit = (e, id) => {
    this.props.onChange(e.target.value, id)
  }

  render(){
    const { editmessage } = this.state;
    const { edit } = this.props;
    const { handleChange } = this;
    // const { id } = this.props
    return(
      <div className="editpost-wrap">
        <div className="postform-on-bg">
          <div className="editpost">
            <PostInput
            edit={edit}
            editmessage={editmessage}
            handleChange={handleChange}
            >
              게시물 수정
            </PostInput>
            <div className="editpost-bottom">
              <button
              className="editpost-button"
                // onClick={()=>{수정하기()}}
              >
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditPostForm;
