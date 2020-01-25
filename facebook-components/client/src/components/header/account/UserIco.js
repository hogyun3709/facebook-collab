import React from 'react';
import { Link, BrowserRouter as Router} from 'react-router-dom';
import './UserIco.css'
import userIco from '../../../images/profile.png';

class UserIco extends React.Component {
    constructor(props){
        super(props);
            this.Staet = {

            };
    }

    render(){
        return (
            <img className="userIco" src={userIco} alt="profileImg" />
        );
    }

}
export default UserIco;