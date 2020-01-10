import React from 'react';
import CommentReplyItem from './CommentReplyItem';
import CommentInput from './CommentInput';

class CommentReply extends React.Component {
    id = 0;
    constructor(props){
        super(props);
        this.state = {
            input: '',
            recomments: []
        }
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleKeyPress = (e) => {
        const { input, recomments } = this.state;
        if ( e.key === 'Enter') {
            this.setState({
                input: '',
                recomments: recomments.concat({
                    id: this.id++,
                    name: 'EunJi',
                    text: input,
                    date: new Date(),
                    like: false,
                    likeNum: 1,
                    setComment: false,
                    editing: false
                })
            })
        }
    }

    toggleCommentSet = (id) => {
        const { recomments } = this.state;
        const selectedIndex = recomments.findIndex(
            i => i.id === id
        );
        recomments[selectedIndex].setComment = !recomments[selectedIndex].setComment;
        this.setState({
            recomments: recomments
        });
    }

    onBlurHandle = (id) => {
        //console.log('onBlur');
        const { recomments } = this.state;
        const selectedIndex = recomments.findIndex(
            i => i.id === id
        );
        this.timeOutId = setTimeout(() => {
            recomments[selectedIndex].setComment = false;
            this.setState({
                recomments: recomments
            });
        });
    }

    onFocusHandle = () => {
        clearTimeout(this.timeOutId);
    }

    handleEdit = (id) => {
        const { recomments } = this.state;
        const selectedIndex = recomments.findIndex(
            i => i.id === id
        )
        recomments[selectedIndex].editing = true;
        recomments[selectedIndex].setComment = false;
        this.setState({
            recomments: recomments
        });
    }

    handleEditCancel = (id) => {
        const { recomments } = this.state;
        const selectedIndex = recomments.findIndex(
            i => i.id === id
        )
        //console.log('cancel');
        console.log('selectedIndex: ' + selectedIndex);
        recomments[selectedIndex].editing = false;
        this.setState({
            recomments: recomments
        });
    }
    
    handleEditEsc = (e, id) => {
        if ( e.keyCode === 27 ) {
            console.log('Esc');
            this.handleEditCancel(id);
        }
    }

    // handleUpdate = (id, comment) => {
    //     const { recomments } = this.state;
    //     this.setState({
    //         recomments: recomments.map(
    //             data => data.id === id ?
    //             {...data, ...comment} // 새 객체에 기존값과 전달받은 data를 덮어씀
    //             : data // 기존값 그대로 유지
    //         )
    //     });
    // }

    isEdited = (value, id) => {
        const { recomments } = this.state;
        const selectedIndex = recomments.findIndex(
            i => i.id === id
        )
        recomments[selectedIndex].editing = false;
        recomments[selectedIndex].text = value;
        this.setState({
            recomments: recomments
        });
    }

    handleRemove = (id) => {
        const { recomments } = this.state;
        this.setState({
            recomments: recomments.filter(
                recomment => recomment.id !== id
            )
        });
    }

    toggleLike = (id) => {
        const { recomments } = this.state;
        const selectedIndex = recomments.findIndex(
            i => i.id === id
        );
        recomments[selectedIndex].like = !recomments[selectedIndex].like;
        this.setState({
            recomments: recomments
        });
    }

    render(){
        const { input, recomments } = this.state;
        const { 
            handleChange, 
            handleKeyPress, 
            onEdit,
            onChange,
            onRemove,
            toggleLike, 
            onReply,
            onBlurHandle, 
            onFocusHandle,
            onCommentSet,
            handleEditCancel,
            handleEditEsc 
        } = this;

        const commentReplyItem = recomments.map(
            (recomment) => (
                <CommentReplyItem
                {...recomment}
                key={recomment.id}
                onCommentSet={onCommentSet}
                onEdit={onEdit}
                onChange={onChange}
                onRemove={onRemove}
                onLikes={toggleLike}
                onReply={onReply}
                onBlurHandle={onBlurHandle}
                onFocusHandle={onFocusHandle}
                handleEditCancel={handleEditCancel}
                handleEditEsc={handleEditEsc}
                />
            )
        );

        return(
            <React.Fragment>
                <ul>
                    {commentReplyItem}
                </ul>
                <CommentInput 
                input={input}
                handleChange={handleChange}
                handleKeyPress={handleKeyPress}
                />
            </React.Fragment>
        );
    }
}
export default CommentReply;