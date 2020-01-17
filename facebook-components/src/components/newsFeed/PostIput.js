import React from 'react';
import UserIco from '../header/account/UserIco';

class PostInput extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const { edit, message, editmessage, handleChange } = this.props;
        return(
        <React.Fragment>
            <div className="postform">
                <div className="postform-title">
                <label for="postform-input">게시물 만들기</label>
                <button type="button" className="postform-close">닫기</button>
                </div>
                <div className="postform-textarea">
                <span className="postform-userIco">
                    <UserIco />
                </span>
                <textarea
                    id="postform-input"
                    className="postform-input postform-input-on"
                    placeholder="EunJi님, 무슨 생각을 하고 계신가요?"
                    value={edit?editmessage:message}
                    // value={message}
                    onChange={(e)=>handleChange(e)}
                    // onFocus={()=>onSubmit()}
                />
                </div>
            </div>
            <div className="postform-items">
                <button type="button" className="postform-item">
                사진/동영상
                </button>
                <button type="button" className="postform-item">
                친구 태그하기
                </button>
                <button type="button" className="postform-item">
                기분/활동
                </button>
                <button type="button" className="postform-item">
                더보기
                </button>
            </div>
        </React.Fragment>
    )}
}
export default PostInput;