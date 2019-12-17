import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import './Notice.css';

class Notice extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notice :
                [
                    {
                        id: 0,
                        name: '친구요청',
                        menu: ['친구찾기','설정'],
                        btn: '모두보기',
                        className: ''
                    },
                    {
                        id: 1,
                        name: '메세지',
                        menu: ['새 그룹','새 메세지'],
                        btn: 'Messenger에서 모두 보기',
                        className: ''
                    },
                    {
                        id: 2,
                        name: '알림',
                        menu: ['모두 읽음 상태로 표시','알림 해제','설정'],
                        btn: '모두보기',
                        className: ''
                    },
                    {
                        id: 3,
                        name: '빠른 도움말',
                        menu: '고객센터',
                        className: ''
                    },
                    {
                        id: 4,
                        name: '더 보기!',
                        className: ''
                    }
                ]
            }
        };

    render(){
        const noticeList = this.state.notice.map(
            (icon) => 
                <React.Fragment>
                    <li className="icon-list">
                        <Link
                        className="icon-link"
                        key={icon.id}
                        >
                            {icon.id}
                        </Link>
                        <span 
                        className="icon-name"
                        >
                            {icon.name}
                        </span> 
                        <div className="banner-wrap">
                            <div className="banner-header">
                                <Link
                                className="banner-name">
                                    {icon.name}
                                </Link>
                                <Link
                                className="banner-menu">
                                    <span className="b-menu">{icon.menu}</span>
                                    {/* <span className="b-menu">{icon.menu2}</span>
                                    <span className="b-menu">{icon.menu3}</span> */}
                                </Link>
                            </div>
                            <Link
                            className="banner-btn">
                                {icon.btn}
                            </Link>
                        </div>
                    </li>  
                </React.Fragment>           
        );

        return(
            <div className="icon-cont">
                <ul className="icon-wrap">
                    {noticeList}
                </ul>
            </div>
        );
    }
}
export default Notice;