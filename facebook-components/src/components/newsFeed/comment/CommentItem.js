import React from 'react';
import './CommentItem.css';

class CommentItem extends React.Component {
    render(){
        const { id, name, text, like, time, recomment, onRemove, onToggle } = this.props;
        return(
            <div className="itemCommentWrapper">
                <div className="itemCommentBox clear">
                    <span className="itemUserInfo" />
                    <span className="itemText">
                        <span className="itemUserName">
                            {name}
                        </span>
                        {text}
                    </span>
                    <span 
                        className="itemRemove"
                        onClick={(e) =>
                            {
                                e.stopPropagation();
                                onRemove(id)}
                            }>
                                Remove
                    </span>
                </div>
                <div className="iteminfo" >
                    <span className={"itemLike ${like?'liked':'unliked'}"}>
                            {
                                like?
                                <span className="liked">좋아요</span>:
                                <span className="unliked">좋아요</span>
                            }
                    </span>
                    <span className="itemRecommant">
                        답글달기
                    </span>
                    <span className="itemTime">
                        {time}
                    </span>
                </div>
            </div>
        );
    }
}
export default CommentItem;