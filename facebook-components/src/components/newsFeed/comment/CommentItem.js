import React from 'react';
import './CommentItem.css';

class CommentItem extends React.Component {
    render(){
        const { id, name, text, like, time, recomment, onRemove, onToggle } = this.props;
        return(
            <React.Fragment>
                <div className="itemUserInfo" />
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
            </React.Fragment>
        );
    }
}
export default CommentItem;