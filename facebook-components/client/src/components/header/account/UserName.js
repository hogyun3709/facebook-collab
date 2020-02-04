import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";

class UserName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "EunJi"
        }
    };
    render(){
        return(
            <Router>
                <Link
                to="/user"
                className="username"
                >
                    {this.state.name}
                </Link>
            </Router>
        );
    }
}
export default UserName;
