import React, { Component } from 'react';
import Modal from 'react-modal';
import PostInput from './PostInput';
import PostInputOn from './PostInputOn';
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
      submit: false,
      showModal: false
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

  handleChange = e => {
    const { post } = this.state;
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
    this.handleCloseModal()
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
    this.timeOutId = setTimeout(()=>{
      this.setState({
        storyScope: false,
        feedScope: false
      })
    })
  }

  onFocusHandle = () => {
    clearTimeout(this.timeOutId);
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }
    
  render() {
    const { post, feedScope, storyScope, submit, showModal } = this.state;
    const { handleChange, feedToggle, storyToggle, onBlurToggle, onFocusHandle, onSubmit, handleOpenModal, handleCloseModal } = this;
    return (
        <div className="postform-wrap">
          <div 
          className="test"
          onClick={handleOpenModal}>
            <PostInput>
              게시물만들기
            </PostInput>
          </div>
          <Modal
            className="postform-modal"
            overlayClassName="postform-overlay"
            isOpen={showModal}
            contentLabel="onRequestClose"
            onRequestClose={handleCloseModal}
          >
              <PostInput
                message={post.message}
                showModal={showModal}
                handleChange={handleChange}
                handleCloseModal={handleCloseModal}
              >
                게시물만들기
              </PostInput>
              <PostInputOn 
                feedToggle={feedToggle}
                onBlurToggle={onBlurToggle}
                onFocusHandle={onFocusHandle}
                storyToggle={storyToggle}
                onSubmit={onSubmit}
                submit={submit}
                feedScope={feedScope}
                storyScope={storyScope}
                handleCloseModal={handleCloseModal}
              />
          </Modal>
        </div>
    );
  }
}

export default PostForm;
