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
                        show: false
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
                ],
                shows: false
        }
        //console.log(this.state.notice[0].show)
    };

    handleToggle = (icon) => {

      let notice = this.state.notice;

      let selectedIndex = null;
      for(var i = 0; i < this.state.notice.length; i++) {
        if(notice[i].id == icon.id) {
          selectedIndex = i;
        }
      }

      console.log(selectedIndex);

      notice[selectedIndex].show = !notice[selectedIndex].show;

      this.setState({
          notice: notice
      });
        // console.log("hellow")
    }

    render(){
        const { notice } = this.state;

        console.log(notice);
        const noticeList = notice.map(
            (icon) =>
                <li className="icon-list">
                    <Link
                    className="icon-link"
                    onClick={() => this.handleToggle(icon)}
                    key={icon.id}
                    >
                        {icon.id}
                    </Link>
                    <span
                    className="icon-tooltip"
                    >
                        {icon.name}
                    </span>

                    { icon.show ?
                      (<div className="banner-wrap">
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
                        )
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
