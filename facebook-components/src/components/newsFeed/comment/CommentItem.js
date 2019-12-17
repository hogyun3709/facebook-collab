import React from 'react';
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import './CommentItem.css';

class CommentItem extends React.Component {
    render(){
        const { id, name, text, like, likeNum, date, commentSet, recomment, onRemove, onToggle } = this.props;
        // console.log(commentSet)
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
                        <a className="itemCommentSet"
                        href="#a" 
                        onClick={onToggle}>
                            <div className="itemCommentSetTitle">수정 또는 삭제</div>
                            <ul 
                            className={commentSet ? ('itemCommentSetListBox') : ('itemCommentSetListBox') }>
                                <li className="itemCommentEdit itemCommentSetList">
                                    <a href="#a">수정...</a>
                                </li>
                                <li
                                className="itemCommentRemove itemCommentSetList"
                                onClick={() => onRemove(id)}>
                                    <a href="#a">삭제하기...</a>
                                </li>
                            </ul>
                        </a>
                    </div>
                </div>
                <div className="iteminfoBox" >
                    <a
                        href="#a"
                        className={like?'liked iteminfo':'unliked iteminfo'}
                        onClick={onToggle}>
                        좋아요
                    </a>
                    <a 
                        href="#a"
                        className="itemRecommant iteminfo">
                        답글 달기
                    </a>
                    <span className="itemTime iteminfo">
                        <TimeAgo date={date} />
                        {/* {date.toLocaleTimeString()} */}
                    </span>
                </div>
            </div>
        );
    }
}
export default CommentItem;