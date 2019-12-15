import React from 'react';
import WidgetForm from './WidgetForm';
import WidgetItem from './WidgetItem';
import WidgetInputBar from './WidgetInputBar';

class WidgetIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input:'',
            friends:[
                { id:0, name:'eunji' },
                { id:1, name:'dami lee' },
                { id:2, name:'hokyun' },
                { id:3, name:'eunji2' }
            ]
        }
    }
    
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
        console.log(this.state.input);
    }

    handleRemove = () => {
        this.setState({
            input:''
        })
    }
    
    render(){
        const { input, friends } = this.state;
        const { handleChange, handleRemove } = this;

        const filterName = friends.filter(
            (friend) => {
                // return friend.name.toLowerCase().includes(input.toLowerCase())
                return friend.name.toLowerCase().indexOf(input.toLowerCase()) > -1
            }
        );
        const friendList = filterName.map(
            (friend) => (
                <WidgetItem
                key={friend.id}
                name={friend.name}
                />
            )
        );

        return(
            <WidgetForm 
            friendList={friendList}
            widgetInputBar={<WidgetInputBar 
                value={input}
                onChange={handleChange}
                onRemove={handleRemove}
                />}
            />
        );
    }
}
export default WidgetIndex;
