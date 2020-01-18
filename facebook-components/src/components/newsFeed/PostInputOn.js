import React from 'react';

class PostInputOn extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { feedToggle, onBlurToggle, onFocusHandle, storyToggle, onSubmit, submit, feedScope, storyScope } = this.props;
        return(
            <div className="postform-opts">
                <ul className="postform-opt">
                <li className="postform-opt-list">
                    <input checked type="checkbox" id="postform-checkbox-feed" className="postform-opt-checkbox"/>
                    <label for="postform-checkbox-feed" className="postform-opt-list-select" 
                    // tabindex="0"
                    >
                    <span className="postform-opt-list-name">뉴스피드</span>
                    </label>
                    <div className="postform-opt-box">
                    <button 
                        type="button" 
                        className={feedScope?"postform-opt-box-selected selected-on":"postform-opt-box-selected"}
                        onClick={()=>feedToggle()}
                        onBlur={()=>onBlurToggle()}
                        >
                        전체 공개
                    </button>
                    {
                        feedScope&&
                        (<div className="postform-opt-box-opacity">
                        <ul className="postform-opt-box-list">
                            <li 
                            className="postform-opt-box-item"
                            onFocus={()=>onFocusHandle()}
                            tabindex="0"
                            >
                            <em className="postform-opt-box-item-title">전체 공개</em>
                            <br/>
                            Facebook 내외의 모든 사람
                            </li>
                            <li 
                            className="postform-opt-box-item"
                            onFocus={()=>onFocusHandle()}
                            tabindex="0"
                            >
                            <em className="postform-opt-box-item-title">친구만</em>
                            <br/>
                            회원님의 Facebook 친구
                            </li>
                            <li 
                            className="postform-opt-box-item"
                            onFocus={()=>onFocusHandle()}
                            tabindex="0"
                            >
                            <em className="postform-opt-box-item-title">나만 보기</em>
                            <br/>
                            나만보기
                            </li>
                        </ul>
                        </div>)
                    }
                    </div>
                </li>
                <li className="postform-opt-list">
                    <input id="postform-checkbox-story" className="postform-opt-checkbox" type="checkbox"/>
                    <label for="postform-checkbox-story" className="postform-opt-list-select" 
                    // tabindex="0"
                    >
                        <span className="postform-opt-list-name">내 스토리</span>
                    </label>
                    <div className="postform-opt-box">
                    <button 
                        type="button" 
                        className={storyScope?"postform-opt-box-selected selected-on":"postform-opt-box-selected"}
                        onClick={()=>storyToggle()}
                        onBlur={()=>onBlurToggle()}
                        >
                        전체 공개
                    </button>
                    {
                        storyScope &&
                        (<ul className="postform-opt-box-list">
                        <li 
                            className="postform-opt-box-item"
                            onFocus={()=>onFocusHandle()}
                            tabindex="0"
                        >
                            <em className="postform-opt-box-item-title">전체 공개</em>
                            <br/>
                            Facebook 내외의 모든 사람
                        </li>
                        <li 
                            className="postform-opt-box-item"
                            onFocus={()=>onFocusHandle()}
                            tabindex="0"
                        >
                            <em className="postform-opt-box-item-title">나만 보기</em>
                            <br/>
                            나만보기
                        </li>
                        </ul>)
                    }
                    </div>
                </li>
                </ul>
                <button
                disabled={submit?"":"disabled"}
                className={submit?"postform-submit postform-submit-on":"postform-submit postform-submit-off"}
                onClick={onSubmit}
                >
                    게시
                </button>
            </div>
        );
    }
}
export default PostInputOn;