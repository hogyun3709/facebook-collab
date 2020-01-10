import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import SearchForm from './SearchForm';
import SearchList from './SearchList';
import './SearchBarIndex.css';

class SearchBarIndex extends React.Component {
    id = 1
    constructor(props){
        super(props);
        this.state = {
            input: '',
            logs: [],
            searchlog: false
        };
    }

handleChange = (e) => {
    this.setState({
        input: e.target.value
    });
}
handleCreate = () => {
    const { input, logs } = this.state;
    this.setState({
        input:'',
        logs: logs.concat({
            id: this.id++,
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
toggleDropdown = () => {
    const searchlog = this.state.searchlog;
    this.setState({
        searchlog: true
    });
}
    render(){
        const { input, logs, searchlog } = this.state;
        const { handleChange, handleCreate, handleKeyPress, handleRemove, toggleDropdown } = this;

        return(
            <React.Fragment>
                <h1 className="logo">
                    <Link
                    className="logoImg"
                    to="/"
                    />
                </h1>
                <div class="searchform-wrap">
                    <SearchForm
                    value={input}
                    logs={logs}
                    onChange={handleChange}
                    onCreate={handleCreate}
                    onKeyPress={handleKeyPress}
                    onRemove={handleRemove}
                    onDropdown={toggleDropdown}
                    searchlog={searchlog}
                    />
                </div>
            </React.Fragment>
        );
    }
}
export default SearchBarIndex;