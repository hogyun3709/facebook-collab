import React from 'react';
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import './CommentItem.css';

class CommentItem extends React.Component {
    render(){
        const { id, name, text, like, likeNum, date, recomment, onRemove, onToggle } = this.props;
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
                    {
                        like?
                        <span className="itemSticker">{likeNum}</span>:false
                    }
                    <div className="itemCommentSetBox">
                        <a href="#a">
                            <div className="itemCommentSetTitle">수정 또는 삭제</div>
                        </a>
                        <ul className="itemCommentSetListBox">
                            <li className="itemCommentEdit itemCommentSetList">
                                <a href="#a">수정...</a>
                            </li>
                            <li
                            className="itemCommentRemove itemCommentSetList"
                            onClick={() => onRemove(id)}>
                                <a href="#a">삭제하기...</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="iteminfo" >
                    <span
                        className={like?'liked':'unliked'}
                        onClick={onToggle}>
                        좋아요
                    </span>
                    <span className="itemRecommant">
                        답글 달기
                    </span>
                    <span className="itemTime">
                        <TimeAgo date={date} />
                        {/* {date.toLocaleTimeString()} */}
                    </span>
                </div>
            </div>
        );
    }
}
export default CommentItem;