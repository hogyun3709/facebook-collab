import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import UserInfo from './UserInfo';
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
                <li className="list">
                    <Link
                    to={list.link}
                    className="list-link" 
                    key={list.id}
                    >
                        {list.name}
                    </Link>
                    
                </li>
        );
        return(
            <div className="account-wrap">
                <div className="user-wrap">
                    <UserInfo />
                </div>
                <ul className="list-wrap">
                    {listItem}
                </ul>
            </div>
        );
    }
}
export default Account;