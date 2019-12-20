import React from 'react';
import './CommentForm.css';

class CommentEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    };

    handleChange = (e) => {
        const { input } = this.state;
        console.log(e.target.value);
        this.setState({
            input: e.target.value
        });
    }
    handleKeyPress = (e) => {
        const { input, id, editing, onUpdate } = this.props;
        if ( e.key === 'Enter' ) {
            console.log('Enter');
            if ( !editing ) {
                this.setState({
                    editing: true,
                    input: input
                });
            } else {
                onUpdate(id, {
                    input: this.state.input
                });
                this.setState({
                    editing: false
                });
            } 
        }
        this.setState({
            input: this.state.input
        });
    }

    render(){
        const { input, id, handleEditCancel, handleEditEsc, onUpdate } = this.props;
        const { handleChange, handleKeyPress } = this;
        return(
            <div className="commentBox commentEditBox clear">
                <div className="commentUserInfo" />
                <div className="commentBar">
                    <input
                    className="commentInput commentEditInput"
                    type="text"
                    placeholder="댓글을 입력하세요..."
                    value={input}
                    onChange={handleChange}
                    // onKeyDown={handleEditEsc}
                    onKeyPress={handleKeyPress}
                    />
                    <div className="attachBox">
                        <a className="attachIconLink attachIcon" />
                        <a className="attachIconLink attachFile" />
                        <a className="attachIconLink attachGIF" />
                        <a className="attachIconLink attachSticker"/>
                    </div>
                    <div className="commentEditCancelBox">
                        <a
                        href="#a"
                        className="commentEditCancel"
                        onClick={(e) => {
                            e.stopPropagation()
                            handleEditCancel(id)}
                        }>
                            취소
                        </a>
                        <span className="commentEditCancelInfo">하려면 Esc 키를 누르세요.</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default CommentEdit;