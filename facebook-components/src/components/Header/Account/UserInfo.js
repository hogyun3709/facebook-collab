import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import './UserInfo.css';

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "EunJi"
        }
    };
    render(){
        return(
            <Link
            to="/User"
            className="user-profile">
                {this.state.name}
            </Link>
        );
    }
}
export default UserInfo;