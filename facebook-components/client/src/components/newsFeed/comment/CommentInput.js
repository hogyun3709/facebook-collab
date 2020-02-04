import React from 'react';
import UserIco from '../../header/account/UserIco'
import './CommentInput.css';

class CommentInput extends React.Component {
    render(){
        const {
            id,
            input,
            handleChange,
            handleKeyPress,
            replyEditing
        } = this.props;
        
        return(
            <div className={replyEditing?'replyCommentBox':'commentBox clear'}>
                <div className={replyEditing?"replyCommentUserInfo":"commentUserInfo"}>
                    <UserIco />
                </div>
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
        );
    };
}
export default CommentInput;