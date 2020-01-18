import React from 'react';
import CommentEdit from './CommentEdit';
import CommentText from './CommentText';
import CommentInfo from './CommentInfo';
import CommentReply from './CommentReply';
// import frenchStrings from 'react-timeago/lib/language-strings/fr';
// import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import './CommentItem.css';

const CommentItem = ({ id, name, text, like, likeNum, reply, date, setComment, editing, onCommentSet, onEdit, onChange, onRemove, onLike, onReply, onBlurHandle, onFocusHandle, handleEditCancel, handleEditEsc }) => {
    return(
        editing?
        <CommentEdit 
            id={id}
            text={text}
            onChange={onChange}
            handleEditCancel={handleEditCancel}
            handleEditEsc={handleEditEsc}
        />
        :
        (<li className="itemCommentWrapper">
            <CommentText 
                id={id}
                name={name}
                text={text}
                like={like}
                likeNum={likeNum}
                setComment={setComment}
                onEdit={onEdit}
                onRemove={onRemove}
                onCommentSet={onCommentSet}
                onBlurHandle={onBlurHandle}
                onFocusHandle={onFocusHandle}
            />
            <CommentInfo
                id={id}
                date={date}
                reply={reply}
                like={like}
                onLike={onLike}
                onReply={onReply}
            />
            {
            reply && <CommentReply />
            }
        </li>)
    );
}
export default CommentItem;