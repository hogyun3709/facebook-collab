import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import UserName from './UserName';
import UserIco from './UserIco';
import './Account.css';

class Account extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lists : [
                {   
                    id: 0,
                    name: '홈',
                    link: '/'
                },
                {   
                    id: 1,
                    name: '친구찾기',
                    link: '/Friends'
                },
                {   
                    id: 2,
                    name: '만들기',
                    link: '/Create'
                }
            ]
        };
    }

    render(){
        const listItem = this.state.lists.map(
            (list) => 
                <li className="account-menu-list">
                    <Link
                    className="account-menu-link" 
                    to={list.link}
                    key={list.id}
                    >
                        {list.name}
                    </Link>
                    
                </li>
        );
        return(
            <div className="account-wrap">
                <Link
                to="/user"
                className="user-wrap">
                    <div className="user-img">
                        <UserIco />
                    </div>
                    <div className="user-name">
                        <UserName />
                    </div>
                </Link>
                <ul className="account-menu">
                    {listItem}
                </ul>
            </div>
        );
    }
}
export default Account;