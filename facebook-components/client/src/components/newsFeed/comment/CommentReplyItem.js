import React from 'react';
import CommentEdit from './CommentEdit';
import CommentText from './CommentText';
import CommentInfo from './CommentInfo';

const commentReplyItem = ({ id, name, text, like, likeNum, date, setComment, editing, onCommentSet, onEdit, onChange, onRemove, onLikes, onBlurHandle, onFocusHandle, handleEditCancel, handleEditEsc }) => {
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
                like={like}
                onLike={onLikes}
            />
        </li>)
    );
}
export default commentReplyItem;