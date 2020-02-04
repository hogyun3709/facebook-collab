import React from 'react';
import UserIco from '../header/account/UserIco';
import UserName from '../header/account/UserName';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import "./SideMenuIndex.css";

class SideMenuIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    };

    render(){
        return(
            <div className="sidemenu">
                <ul className="sidemenu-box">
                    <li className="sidemenu-list sidemenu-gnb">
                        <Link
                        to="/home"
                        className="sidemenu-link"
                        >
                            <span className="sidemenu-userico">
                                <UserIco />
                            </span>
                            <span className="sidemenu-username">
                                <UserName />
                            </span>
                        </Link>
                    </li>
                    <li className="sidemenu-list sidemenu-gnb sidemenu-on">
                        <Link
                        to="/home"
                        className="sidemenu-link"
                        >
                            뉴스피드
                        </Link>
                    </li>
                    <li className="sidemenu-list sidemenu-gnb">
                        <Link
                        to="/home"
                        className="sidemenu-link"
                        >
                            메신저
                        </Link>
                    </li>
                </ul>
                <h3  className="sidmenu-snb-title">둘러보기</h3>
                <ul className="sidemenu-box">
                    <li className="sidemenu-list sidemenu-snb">
                        <Link
                        to="/home"
                        className="sidemenu-link"
                        >
                            이벤트
                        </Link>
                    </li>
                    <li className="sidemenu-list sidemenu-snb">
                        <Link
                        to="/home"
                        className="sidemenu-link"
                        >
                            기부 캠페인
                        </Link>
                    </li>
                    <li className="sidemenu-list sidemenu-snb">
                        <Link
                        to="/home"
                        className="sidemenu-link"
                        >
                            친구 리스트
                        </Link>
                    </li>
                    <li className="sidemenu-list sidemenu-snb">
                        <Link
                        to="/home"
                        className="sidemenu-link"
                        >
                            게임
                        </Link>
                    </li>
                    <li className="sidemenu-list sidemenu-snb">
                        <Link
                        to="/home"
                        className="sidemenu-link"
                        >
                            날씨
                        </Link>
                    </li>
                    <li className="sidemenu-list sidemenu-snb">
                        <Link
                        to="/home"
                        className="sidemenu-link"
                        >
                            저장
                        </Link>
                    </li>
                    <li className="sidemenu-list sidemenu-snb">
                        <Link
                        to="/home"
                        className="sidemenu-link"
                        >
                            쿠폰
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
export default SideMenuIndex;