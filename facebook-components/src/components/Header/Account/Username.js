import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import './UserName.css';

class Username extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "EunJi"
        }
    };
    render(){
        return(
            <span
            to="/User"
            className="username">
                {this.state.name}
            </span>
        );
    }
}
export default Username;