import React from 'react';

class CommentInput extends React.Component {
    render(){
        const {
            input,
            handleChange,
            handleKeyPress
        } = this.props;
        
        return(
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
        );
    };
}
export default CommentInput;