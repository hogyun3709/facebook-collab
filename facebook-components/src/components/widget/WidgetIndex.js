import React from 'react';
import WidgetForm from './WidgetForm';
import WidgetItem from './WidgetItem';
import WidgetInputBar from './WidgetInputBar';
import './WidgetIndex.css';

class WidgetIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input:'',
            lists:[
                { id:0, name:'hokyun' },
                { id:1, name:'dami lee' },
                { id:2, name:'somi choi' }
            ]
        }
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }
    handleRemove = () => {
        this.setState({
            input:''
        })
    }
    render(){
        const { input, lists } = this.state;
        const { handleChange, handleRemove } = this;
        const widgetItems = lists.map(
            (list) => (
                <WidgetItem
                key={list.id}
                name={list.name}
                />
            )
        );
        return(
            <WidgetForm 
            widgetItems={widgetItems}
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
