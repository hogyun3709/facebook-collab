import React from 'react';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import './CommentForm.css';

class CommentForm extends React.Component {
    id = 0;
    constructor(props){
        super(props);
        this.state = {
            input: '',
            comments: []
        }
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });

    }

    handleKeyPress = (e) => {
        const { input, comments } = this.state;
        if( e.key === 'Enter' ) {
            this.setState({
                input: '',
                comments: comments.concat({
                    id: this.id++,
                    name: 'EunJi',
                    text: input,
                    date: new Date(),
                    like: false,
                    likeNum: 1,
                    reply: false,
                    setComment: false,
                    editing: false
                })
            });
        }
    }

    toggleCommentSet = (id) => {
        const { comments } = this.state;
        const selectedIndex = comments.findIndex(
            i => i.id === id
        );
        comments[selectedIndex].setComment = !comments[selectedIndex].setComment;
        this.setState({
            comments: comments
        });
    }

    onBlurHandle = (id) => {
        //console.log('onBlur');
        const { comments } = this.state;
        const selectedIndex = comments.findIndex(
            i => i.id === id
        );
        this.timeOutId = setTimeout(() => {
            comments[selectedIndex].setComment = false;
            this.setState({
                comments: comments
            });
        });
    }

    onFocusHandle = () => {
        clearTimeout(this.timeOutId);
    }

    handleEdit = (id) => {
        const { comments } = this.state;
        const selectedIndex = comments.findIndex(
            i => i.id === id
        )
        comments[selectedIndex].editing = true;
        comments[selectedIndex].setComment = false;
        this.setState({
            comments: comments
        });
    }

    handleEditCancel = (id) => {
        const { comments } = this.state;
        const selectedIndex = comments.findIndex(
            i => i.id === id
        )
        //console.log('cancel');
        console.log('selectedIndex: ' + selectedIndex);
        comments[selectedIndex].editing = false;
        this.setState({
            comments: comments
        });
    }
    
    handleEditEsc = (e, id) => {
        if ( e.keyCode === 27 ) {
            console.log('Esc');
            this.handleEditCancel(id);
        }
    }

    // handleUpdate = (id, comment) => {
    //     const { comments } = this.state;
    //     this.setState({
    //         comments: comments.map(
    //             data => data.id === id ?
    //             {...data, ...comment} // 새 객체에 기존값과 전달받은 data를 덮어씀
    //             : data // 기존값 그대로 유지
    //         )
    //     });
    // }

    isEdited = (value, id) => {
        const { comments } = this.state;
        const selectedIndex = comments.findIndex(
            i => i.id === id
        )
        comments[selectedIndex].editing = false;
        comments[selectedIndex].text = value;
        this.setState({
            comments: comments
        });
    }

    handleRemove = (id) => {
        const { comments } = this.state;
        this.setState({
            comments: this.state.comments.filter(
                comment => comment.id !== id
            )
        });
    }

    toggleLike = (id) => {
        const { comments } = this.state;
        const selectedIndex = comments.findIndex(
            i => i.id === id
        );
        comments[selectedIndex].like = !comments[selectedIndex].like;
        this.setState({
            comments: comments
        });
    }

    onReply = (id) => {
        const { comments } = this.state;
        const selectedIndex = comments.findIndex(
            i => i.id === id
        );
        console.log(comments.length);
        
        comments[selectedIndex].reply = true;
        this.setState({
            comments: comments
        });
    }

    CountComment = () => {
        const { comments } = this.state;
        return(
            comments.length
        );
    }

    render(){
        const { input, comments } = this.state;
        const { 
            handleChange, 
            handleKeyPress, 
            toggleLike,
            onReply,
            toggleCommentSet, 
            onBlurHandle, 
            onFocusHandle, 
            handleEdit,
            isEdited,
            handleUpdate,
            handleRemove,
            handleEditCancel,
            handleEditEsc,
            CountComment
        } = this;

        const commentItem = comments.map(
            (comment) => (
                <CommentItem
                    {...comment}
                    key={comment.id}
                    onEdit={handleEdit}
                    onChange={isEdited}
                    onUpdate={handleUpdate}
                    onRemove={handleRemove}
                    onCommentSet={toggleCommentSet}
                    onLike={toggleLike}
                    onReply={onReply}
                    onBlurHandle={onBlurHandle}
                    onFocusHandle={onFocusHandle}
                    handleEditCancel={handleEditCancel}
                    handleEditEsc={handleEditEsc}
                />
            )
        );
      
        return(
            <div className="commentWrapper">
                <ul className="commentListWrapper">
                    {commentItem}
                </ul>
                <CommentInput
                input={input}
                handleChange={handleChange}
                handleKeyPress={handleKeyPress}
                />
                <div className="commentNum">댓글 {CountComment()}개</div>
            </div>
        );
    }
}
export default CommentForm;
