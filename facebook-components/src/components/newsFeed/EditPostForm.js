import React, { Component } from "react";

class EditPostForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      editMessage: this.props.message
    }
  }
  handleChange = e => {
    this.setState({
      editMessage: e.target.value
    })
    console.log(this.state.editMessage)
  }
  handleEdit = (e, id) => {
    this.props.onChange(e.target.value, id)
  }
  render(){
    const { editMessage } = this.state;
    const { id } = this.props
    return(
      <div>
        <label>Post</label>
        <input
          type="text"
          value={editMessage}
          onChange={(e) => this.handleChange(e)}
          />
        <button onClick={(e) => this.handleEdit(e, id)}>수정</button>
      </div>

    )
  }
}



export default EditPostForm;
