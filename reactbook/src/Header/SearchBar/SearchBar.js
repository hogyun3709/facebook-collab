import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
// import logo from '../../images/logo.png';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        };
    this.updateText = this.updateText.bind(this);
    this.submit = this.submit.bind(this);
    }
updateText(e){
    this.setState({
        text: e.target.value
    });
}
submit(){

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
                value={this.state.text}
                onChange={this.updateText}
                />
                <button 
                type="submit"
                className="submit"
                />
            </div>
        </div>
        );
    }
}
export default SearchBar;