import React from 'react';

const CommentText = ({ id, name, text, like, likeNum, setComment, onEdit, onRemove, onCommentSet, onBlurHandle, onFocusHandle }) => {
    return(
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
                <span className="itemSticker">{likeNum}</span>:null
            }
            <div className="itemCommentSetBox">
                <a 
                href="#a"
                className="itemCommentSet"
                onClick={(e) => {
                    e.stopPropagation()
                    onCommentSet(id)
                }}
                onBlur={() => onBlurHandle(id)}
                onFocus={() => onFocusHandle(id)}
                >
                    {
                        !setComment&&
                        (<div className="itemCommentSetTitle">수정 또는 삭제</div>)
                    }
                    {
                        setComment&&
                        (<ul 
                        className={setComment?'itemCommentSetListBox':'itemCommentSetListBox'}>
                            <li 
                            className="itemCommentEdit itemCommentSetList"
                            onClick={(e) => 
                                {e.stopPropagation()
                                    onEdit(id)}
                            }>
                                <span>수정...</span>
                            </li>
                            <li
                            className="itemCommentRemove itemCommentSetList"
                            onClick={(e) => 
                                {e.stopPropagation()
                                    onRemove(id)}
                            }>
                                <span>삭제하기...</span>
                            </li>
                        </ul>)
                    }
                </a>
            </div>
        </div>
    );
}
export default CommentText;