import React from 'react';
import CommentEdit from './CommentEdit';
import TimeAgo from 'react-timeago';
// import frenchStrings from 'react-timeago/lib/language-strings/fr';
// import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import './CommentItem.css';

class CommentItem extends React.Component {
    render(){
        const { 
            id, 
            name, 
            text, 
            like,
            likeNum, 
            date, 
            setComment, 
            onCommentSet, 
            editing,
            onEdit,
            onUpdate,
            onRemove,
            onLike, 
            onBlurHandle, 
            onFocusHandle,
            handleEditCancel,
            handleEditEsc
        } = this.props;

        return(
            editing?
                <CommentEdit 
                editing={editing}
                onUpdate={onUpdate}
                handleEditCancel={handleEditCancel}
                handleEditEsc={handleEditEsc}
                />
                :
                (<div className="itemCommentWrapper">
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
                                    setComment?
                                    null:
                                    <div className="itemCommentSetTitle">수정 또는 삭제</div>
                                }
                                {
                                    setComment?
                                    (<ul 
                                    className={setComment ? ('itemCommentSetListBox') : ('itemCommentSetListBox') }>
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
                                    : null
                                }
                            </a>
                        </div>
                    </div>
                    <div className="iteminfoBox" >
                        <a
                            href="#a"
                            className={like?'liked iteminfo':'unliked iteminfo'}
                            onClick={(e) => 
                                {e.stopPropagation()
                                onLike(id)}
                            }>
                            좋아요
                        </a>
                        <a 
                            href="#a"
                            className="itemRecommant iteminfo">
                            답글 달기
                        </a>
                        <span className="itemTime iteminfo">
                            <TimeAgo date={date} />
                        </span>
                    </div>
                </div>)
        );
    }
}
export default CommentItem;