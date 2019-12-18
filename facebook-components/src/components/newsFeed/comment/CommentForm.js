import React from 'react';
import CommentItem from './CommentItem';
import './CommentForm.css';

class CommentForm extends React.Component {
    // id는 인삭하나, 값의 참조할 수 없음.. ( id 2부터 ++ )
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
        //console.log("inputValue: " + e.target.value)
    }

    handleKeyPress = (e) => {
        const { input, comments } = this.state;
        if( e.key === 'Enter' ) {
            this.setState({
                input: '',
                comments: comments.concat({
                    // unshift 변경 시 map error
                    id: this.id++,
                    name: 'EunJi',
                    text: input,
                    date: new Date(),
                    like: false,
                    likeNum: 1,
                    setComment: false
                })
            });
            // console.log(comments);
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
        const { comments } = this.state;
        const selectedIndex = comments.findIndex(
            i => i.id === id
        );
        this.timeOutId = setTimeout(() => {comments[selectedIndex].setComment = false;
            this.setState({
                comments: comments
            });
        });
    }

    onFocusHandle = (id) => {
        clearTimeout(this.timeOutId);
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

    render(){
        const { input, comments } = this.state;
        const { handleChange, handleKeyPress, toggleCommentSet, handleRemove, toggleLike, onBlurHandle, onFocusHandle } = this;
        const commentItem = comments.map(
            (comment) => (
                <CommentItem
                    {...comment}
                    key={comment.id}
                    onRemove={handleRemove}
                    onCommentSet={toggleCommentSet}
                    onLike={toggleLike}
                    onBlurHandle={onBlurHandle}
                    onFocusHandle={onFocusHandle}
                />
            )
        );

        return(
            <div className="commentWrapper">
                <div className="commentListWrapper">
                        {commentItem}
                </div>
                <div className="commentBox clear">
                    <div className="commentUserInfo" />
                    <div className="commentBar">
                        <input
                        className="commentInput"
                        type="text"
                        placeholder="댓글을 입력하세요..."
                        value={input}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        />
                        <div className="attachBox">
                            <a className="attachIconLink attachIcon" />
                            <a className="attachIconLink attachFile" />
                            <a className="attachIconLink attachGIF" />
                            <a className="attachIconLink attachSticker"/>
                        </div>
                    </div>
                </div>
                <div className="commentNum">댓글 {comments.length}개</div>
            </div>
        );
    }
}
export default CommentForm;
