import React from 'react';
import './Footer.css';

class Footer extends React.Component {

    render(){
        return(
            <div className="main-footer">
                <ul className="footer-list">
                    <li className="footer-item">개인정보처리방침</li>
                    <li className="footer-item">이용 약관</li>
                    <li className="footer-item">광고</li>
                    <li className="footer-item">쿠키</li>
                </ul>
                <span className="footer-info">Facebook © 2020</span>
            </div>
        );
    }
}
export default Footer;