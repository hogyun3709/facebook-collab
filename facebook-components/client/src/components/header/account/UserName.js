import React from 'react';
// import { Link, BrowserRouter as Router } from "react-router-dom";

class UserName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "EunJi"
        }
    };
    render(){
        return(
<<<<<<< HEAD:facebook-components/src/components/Header/Account/Username.js
            // <Router>
            //     <Link
            //     to="/User"
            //     className="username">
                    <span>
                        {this.state.name}
                    </span>
            //     </Link>
            // </Router>
=======
            <Router>
                <Link
                to="/User"
                className="username"
                >
                    {this.state.name}
                </Link>
            </Router>
>>>>>>> 1f62def4201b148c9284d1593e4a5dfccffb3144:facebook-components/client/src/components/header/account/UserName.js
        );
    }
}
export default UserName;
