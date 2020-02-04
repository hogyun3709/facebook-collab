import React from 'react';
import CommentReply from './CommentReply';
import './CommentItem.css';
import TimeAgo from 'react-timeago';

const CommentInfo = ({ id, date, like, onLike, onReply }) => {
    return(
        <div className="iteminfoBox" >
            <a
                href="#a"
                className={like?"liked iteminfo":"unliked iteminfo"}
                onClick={(e) => 
                    {e.stopPropagation()
                    onLike(id)}
                }>
                좋아요
            </a>
            <a 
                href="#a"
                className="itemRecommant iteminfo"
                onClick={(e) => {
                    e.stopPropagation()
                    onReply(id)}
                }>
                답글 달기
            </a>
            <span className="itemTime iteminfo">
                <TimeAgo date={date} />
            </span>
        </div>
    );
}
export default CommentInfo;