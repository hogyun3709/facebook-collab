import React from 'react';
import CommentItem from './CommentItem';
import './CommentForm.css';

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            comments: [
                { id:0, name: 'EunJi', text:'first comment.', like:false, time:(new Date()).getDay }
            ]
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
                    id: comments.id++,
                    name: 'EunJi',
                    text: input,
                    time: comments.time
                })
            });
        }
    }

    handleRemove = (id) => {
        const { comments } = this.state;
        this.setState({
            comments: comments.filter(
                comment => comment.id !== id
            )
        });
    }

    render(){
        const { input, comments } = this.state;
        const { handleChange, handleKeyPress, handleRemove } = this;

        const commentItem = comments.map(
            (comment) => (
                <CommentItem 
                    {...comment}
                    key={comment.id}
                    onRemove={handleRemove}
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
                            <div className="attachIcon" />
                            <div className="attachFile" />
                            <div className="attachGIF" />
                            <div className="attachSticker" />
                        </div>
                    </div>
                    <div className="commentNum">댓글 {comments.length}개</div>
                </div>
            </div>
        );
    }
}
export default CommentForm;