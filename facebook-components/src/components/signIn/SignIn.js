import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './css/SignIn.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn : [
                {
                    email: '',
                    password: ''
                }
            ],
            signUp: [
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    birth: '',
                    sex: ''
                }
            ]
        };
    }

    render(){

        return(
            <div className="signin">
                <header className="signin__header">
                    <div className="signin__header__inbox header">
                        <h2 className="header__left">
                            <Link 
                                to="/"
                                className="header__left__logo logo"
                            >
                                <img className="logo__img" src={Logo} alt="페이스북 로고"/>
                            </Link>
                        </h2>
                        <div className="header__right">
                            <div className="login">
                                <form className="login__form">
                                    <label className="login__form__label">
                                        이메일 또는 휴대폰
                                        <input 
                                            className="login__form__label__input"
                                            type="email" 
                                        />
                                    </label>
                                    <label className="login__form__label">
                                        비밀번호
                                        <input 
                                            className="login__form__label__input"
                                            type="password" 
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className="login__form__submit"
                                    >
                                        로그인
                                    </button>
                                </form>
                                <a href="#a" className="login__searchId">
                                    계정을 잊으셨나요?
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="signin__main">
                    <div className="signin__main__inbox">
                        <h3 className="main__left">
                            최근 로그인 기록
                        </h3>
                        <div className="main__right signup">
                            <h3 className="signup__title">
                                새 계정 만들기
                                <span className="signup__title__desc">
                                    빠르고 쉽습니다.
                                </span>
                            </h3>
                            <form className="signup__form">
                                <div className="signup__form__account account">
                                    <label>
                                        <input 
                                            className="account__first"
                                            type="text" 
                                            placeholder="성(姓)"
                                        />
                                    </label>
                                    <label>
                                        <input 
                                            className="account__last"
                                            type="text" 
                                            placeholder="이름(성은 제외)"
                                        />
                                    </label>
                                    <label>
                                        <input 
                                            className="account__id"
                                            type="email" 
                                            placeholder="휴대폰 번호 또는 이메일"
                                        />
                                    </label>
                                    <label>
                                        <input 
                                            className="account__pw"
                                            type="password" 
                                            placeholder="새 비밀번호"
                                        />
                                    </label>
                                </div>
                                <div className="signup__form__birth">
                                    <p>생일</p>
                                    <div>
                                        <button className="btn--desc">
                                            도움말
                                        </button>
                                        <div
                                            className="btn--desc__desc"
                                        >
                                            생일을 입력하면 회원님의 연령에 맞는 Facebook 환경을 이용할 수 있습니다. 
                                            프로필의 정보 섹션에서 이 정보의 공개 범위를 변경할 수 있습니다. 
                                            자세한 내용은 데이터 정책에서 확인해주세요.
                                        </div>
                                    </div>
                                </div>
                                <div className="signup__form__sex">
                                    <p>성별</p>
                                    <label>
                                        <input 
                                            className="sex__w"
                                            type="radio" 
                                        />
                                        여성
                                    </label>
                                    <label>
                                        <input 
                                            className="sex__m"
                                            type="radio" 
                                        />
                                        남성
                                    </label>
                                    <label>
                                        <input 
                                            className="sex__ect"
                                            type="radio" />
                                        직접지정
                                    </label>
                                    <div>
                                        <button className="btn--desc">
                                            도움말
                                        </button>
                                        <div
                                            className="btn--desc__desc"
                                        >
                                            나중에 프로필에서 회원님의 성별을 볼 수 있는 사람을 변경할 수 있습니다. 
                                        다른 성별을 선택하거나 성별을 밝히고 싶지 않은 경우 직접 지정을 선택하세요.
                                        </div>
                                    </div>
                                    <div>
                                        <select className="sex__ect__form">
                                            <option>회원님을 어떻게 지칭할건지 선택하세요</option>
                                            <option>여성: "생일을 축하해주세요!"</option>
                                            <option>남성: "생일을 축하해주세요!"</option>
                                            <option>여러 명: "생일을 축하해주세요!"</option>
                                        </select>
                                        <span className="sex__ect__desc">
                                            선택한 항목이 모든 사람에게 공개됩니다.
                                        </span>
                                        <input 
                                            className="sex__ect__input"
                                            type="text" 
                                            placeholder="성별(선택 사항)" 
                                        />
                                    </div>
                                </div>
                                <p className="signup__form__desc">
                                    가입하기 버튼을 클릭하면 Facebook의 약관, 데이터 정책 및 쿠키 정책
                                    에 동의하게 됩니다. Facebook으로부터 SMS 알림을 받을 수 있으며 알
                                    림은 언제든지 옵트 아웃할 수 있습니다.
                                </p>
                                <button className="signup__form__submit">
                                    가입하기
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
                <footer className="signin__footer">
                    <div className="signin__footer__inbox footer">
                        <div className="footer__top">
                            뭘 적을까
                        </div>
                        <div className="footer__bottom">
                            Facebook © 2020
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default SignIn;
