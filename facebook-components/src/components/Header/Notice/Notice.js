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
                        title: '친구요청',
                        menu: ['친구찾기','설정'],
                        btn: '모두보기',
                        show: false
                    },
                    {
                        id: 1,
                        title: '메세지',
                        menu: ['새 그룹','새 메세지'],
                        btn: 'Messenger에서 모두 보기',
                        show: false
                    },
                    {
                        id: 2,
                        title: '알림',
                        menu: ['모두 읽음 상태로 표시','알림 해제','설정'],
                        btn: '모두보기',
                        show: false
                    },
                    {
                        id: 3,
                        title: '빠른 도움말',
                        menu: '고객센터',
                        show: false
                    },
                    {
                        id: 4,
                        title: '더 보기',
                        show: false
                    }
                ]
        }
        this.timeOutId = null
    };

    handleToggle = (icon) => {
        const notice = this.state.notice;
        const selectedIndex = notice.findIndex((i) =>
            i.id === icon.id
        )
        //클릭된 아이콘의 id와 일치하는 배열의 index값 출력
        //console.log(selectedIndex);

        //클릭된 배열의 state값 변경
        notice[selectedIndex].show = !notice[selectedIndex].show;
        this.setState({
            notice: notice
        });
    }

    onBlurHandle = (icon) => {
        const notice = this.state.notice;
        //console.log('onBlur');
        const selectedIndex = notice.findIndex((i) =>
            i.id === icon.id
        )
        
        // if(!banner.onmouseenter()) {
        //     notice[selectedIndex].show = false;
        // } else if (banner.onmouseenter()) {
        //     notice[selectedIndex].show = true;
        // } 
        //블러된 배열의 state값 변경 (동시에 하위요소 focus시, event clearTimeOut)
        this.timeOutId = setTimeout(() => {
            notice[selectedIndex].show = false;
            this.setState({
                notice: notice
            });
        });
    }

    onFocusHandle = (icon) => {
        clearTimeout(this.timeOutId);
    }

    render(){
        const { notice } = this.state;
        const { handleToggle, onBlurHandle, onFocusHandle, onMouseOver, onMouseOut } = this;

        const noticeList = notice.map(
            (icon) =>
                <li 
                className="icon-list"
                onFocus={() => onFocusHandle(icon)}
                onBlur={() => onBlurHandle(icon)}
                // onBlur={(e) => e.stopPropagation()}
                >
                    <Link
                    className="icon-link"
                    onClick={() => handleToggle(icon)}
                    key={icon.id}
                    >
                        {icon.id}
                    </Link>
                    { 
                        icon.show ?
                        null
                        :
                        (<span
                        className="icon-tooltip"
                        >
                            {icon.title}
                        </span>)
                    }
                    { 
                    icon.show ?
                        (<div className="banner-wrap">
                            <div className="banner-header">
                                <Link
                                className="banner-name">
                                    {icon.title}
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
                        </div>)
                        :
                        null
                    }
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
