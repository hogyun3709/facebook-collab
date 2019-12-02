import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import SearchForm from './SearchForm';
import './SearchBarIndex.css';

class SearchBarIndex extends React.Component {
    id = 1
    constructor(props){
        super(props);
        this.state = {
            input: '',
            logs: [
                {id: 0, text: 'Please leave a search log.'}
            ]
        };
    }

handleChange = (e) => {
    this.setState({
        input: e.target.value
    });
}
handleCreate = () => {
    const {input,logs} = this.state;
    this.setState({
        input:'',
        logs: logs.concat({
            id: logs.id++,
            text: input
        })
    });
}
handleKeyPress = (e) => {
    if(e.key === 'Enter') {
        this.handleCreate();
    }
}
handleRemove = (id) => {
    const { logs } = this.state;
    this.setState({
        logs: logs.filter(
            log => log.id !== id
        )
    });
  }

    render(){
        const { input, logs } = this.state;
        const { handleChange, handleCreate, handleKeyPress, handleRemove } = this;
        return(
            <div className="header-left">
                <h1 className="logo">
                    <Link
                    className="logoImg"
                    to="/"
                    />
                </h1>
                <div class="SearchForm-wrap">
                    <SearchForm
                    value={input}
                    logs={logs}
                    onChange={handleChange}
                    onCreate={handleCreate}
                    onKeyPress={handleKeyPress}
                    onRemove={handleRemove}
                    />
                </div>
            </div>
        );
    }
}
export default SearchBarIndex;