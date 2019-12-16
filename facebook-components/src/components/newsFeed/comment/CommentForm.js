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
                    time: comments.time
                })
            });
        }
        console.log(comments);
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
        console.log( this.hello )
        console.log({ comments })
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
                    <div className="commentNum">댓글 {comments.length}개</div>
                </div>
            </div>
        );
    }
}
export default CommentForm;