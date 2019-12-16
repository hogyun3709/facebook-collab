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
                        show: true
                    },
                    {
                        id: 1,
                        name: '메세지',
                        menu: ['새 그룹','새 메세지'],
                        btn: 'Messenger에서 모두 보기',
                        show: false
                    },
                    {
                        id: 2,
                        name: '알림',
                        menu: ['모두 읽음 상태로 표시','알림 해제','설정'],
                        btn: '모두보기',
                        show: false
                    },
                    {
                        id: 3,
                        name: '빠른 도움말',
                        menu: '고객센터',
                        show: false
                    },
                    {
                        id: 4,
                        name: '더 보기',
                        show: false
                    }
                ]
        }
    };

    handleToggle = () => {
        const notice = this.state;
        this.setState({
            notice: !notice.show
        });
        console.log(notice.show);
    }

    render(){
        const notice = this.state;
        const handleToggle = this;
        const noticeList = this.state.notice.map(
            (icon) => 
                <li className="icon-list">
                    <Link
                    className="icon-link"
                    onClick={handleToggle}
                    key={icon.id}
                    >
                        {icon.id}
                    </Link>
                    <span 
                    className="icon-tooltip"
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
                                </Link>
                            </div>
                            <Link
                            className="banner-btn">
                                {icon.btn}
                            </Link>
                        </div>
                </li>          
        );

        return(
            <div className="icon-cont">
                <ul
                    className="icon-wrap">
                    {noticeList}
                </ul>
            </div>
        );
    }
}
export default Notice;