import React from 'react';
import './CommentForm.css';

class CommentEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: this.props.text
        }
    };

    handleChange = (e) => {
        //console.log('keyPress');
        this.setState({
            input: e.target.value
        });
    }

    handleEdit = (e, id) => {
            //console.log('Enter');
            this.props.onChange(e.target.value, id);
    }

    render(){
        const { input } = this.state;
        const { id, handleEditCancel, handleEditEsc } = this.props;
        const { handleChange, handleEdit } = this;
        return(
            <div className="commentBox commentEditBox clear">
                <div className="commentUserInfo" />
                <div className="commentBar">
                    <input
                    className="commentInput commentEditInput"
                    type="text"
                    placeholder="댓글을 입력하세요..."
                    value={input}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleEditEsc(e,id)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleEdit(e,id)
                        }
                    }}
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