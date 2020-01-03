import React from 'react';
import CommentForm from './CommentForm';

const CommentIndex = () => {
    // onCount = (comments) => {
    //     console.log(comments.length);
    // }
    return(
        <div>
            <CommentForm 
            // onCount={onCount}
            />
            {/* <div className="commentNum">댓글 {comments.length}개</div> */}
        </div>
    )
}
export default CommentIndex;