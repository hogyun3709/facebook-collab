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
                to="/User"
                className="username"
                >
                    {this.state.name}
                </Link>
            </Router>
        );
    }
}
export default UserName;
