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
                { id:0, name:'EunJi' },
                { id:1, name:'Dami Lee' },
                { id:2, name:'Hokyun' },
                { id:3, name:'Musung Park' }
            ],
            close: true
        }
    }
    
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
        //console.log(this.state.input);
    }

    handleRemove = () => {
        this.setState({
            input:''
        })
    }

    handleToggle = () => {
        this.setState({
            close: !this.state.close
        });
    }
    
    render(){
        const { input, friends, close } = this.state;
        const { handleChange, handleRemove, handleToggle } = this;

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
            close={close}
            onToggle={handleToggle}
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
