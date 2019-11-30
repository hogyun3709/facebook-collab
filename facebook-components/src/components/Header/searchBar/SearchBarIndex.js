import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import SearchList from './SearchList';
import SearchForm from './SearchForm';
import './SearchBarIndex.css';


class SearchBarIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: "",
            logs: [
                {
                    id: 0,
                    text: 'enjoy react :)'
                    // date: new Date().toLocaleDateString
                }
            ]
        };
    }
updateInput = (e) => {
    this.setState({
        input: e.target.value
    });
}
submit = () => {
    // input:''
    // log: 
}

    render(){
        return(
        <div className="header-left">
            <h1 className="logo">
                <Link
                to="/"
                className="logoImg"
                />
            </h1>
            <div className="form">
                <input
                className="searchBar"
                type="text"
                placeholder="검색"
                value={this.state.input}
                onChange={this.updateInput}
                />
                <button 
                type="submit"
                className="submit"
                onClick={this.submit}
                />
            </div>
            <SearchForm />
            <SearchList />
        </div>
        );
    }
}
export default SearchBarIndex;