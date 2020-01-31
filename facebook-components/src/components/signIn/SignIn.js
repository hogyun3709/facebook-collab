import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import Profile from '../../images/profile.png';
import UserIco from '../header/account/UserIco';
import UserName from '../header/account/UserName';
import './css/SignIn.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn : [
                {
                    email: 'eunji@facebook.io',
                    password: '1234'
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
                    <div className="signin__header__inbox header inbox">
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
                    <div className="signin__main__inbox main inbox">
                        <div className="main__left signup">
                            <h3 className="signup__title">
                                최근 로그인 기록
                                <span className="signup__title__desc">
                                    사진을 클릭하고 로그인하세요.
                                </span>
                            </h3>
                            <div className="signup__log">
                                <span className="signup__log__ico">
                                    <img src={Profile} alt="프로필"/>
                                    <span className="signup__log__name">
                                        <UserName />
                                    </span>
                                </span>
                                <span className="signup__log__ico">
                                    <img src={Profile} alt="프로필"/>
                                    <span className="signup__log__name">
                                        Hokyun
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="main__right signup">
                            <h3 className="signup__title">
                                새 계정 만들기
                                <span className="signup__title__desc">
                                    빠르고 쉽습니다.
                                </span>
                            </h3>
                            <form className="signup__form">
                                <div className="signup__form__account input">
                                    <label>
                                        <input 
                                            className="input__signup input__signup-s input__signup-space"
                                            type="text" 
                                            placeholder="성(姓)"
                                            autofocus="1"
                                        />
                                    </label>
                                    <label>
                                        <input 
                                            className="input__signup input__signup-s"
                                            type="text" 
                                            placeholder="이름(성은 제외)"
                                        />
                                    </label>
                                    <label>
                                        <input 
                                            className="input__signup input__signup-m"
                                            type="email" 
                                            placeholder="휴대폰 번호 또는 이메일"
                                        />
                                    </label>
                                    <label>
                                        <input 
                                            className="input__signup input__signup-m"
                                            type="password" 
                                            placeholder="새 비밀번호"
                                        />
                                    </label>
                                </div>
                                <div className="info select">
                                    <p className="info__title">생일</p>
                                    <select className="select__yyyy select-border">
                                        <option selected disabled>년도</option>
                                    </select>
                                    <select className="select__mm select-border">
                                        <option selected disabled>월</option>
                                    </select>
                                    <select className="select__dd select-border">
                                        <option selected disabled>일</option>
                                    </select>
                                    <div className="info__help">
                                        <button className="info__help__btn">
                                            도움말
                                        </button>
                                        {/* <div className="info__help__box box">  
                                            <p className="box__desc">
                                            생일을 입력하면 회원님의 연령에 맞는 Facebook 환경을 이용할 수 있습니다. 
                                            프로필의 정보 섹션에서 이 정보의 공개 범위를 변경할 수 있습니다. 
                                            자세한 내용은 데이터 정책에서 확인해주세요.
                                            </p>
                                            <div className="box__btn">
                                                <button className="box__btn-normal box__btn-dark">
                                                    닫기
                                                </button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="signup__form__info info">
                                    <p className="info__title">성별</p>
                                    <label>
                                        <input 
                                            name="gender"
                                            className="info__radio"
                                            type="radio" 
                                        />
                                        여성
                                    </label>
                                    <label>
                                        <input 
                                            name="gender"
                                            className="info__radio"
                                            type="radio" 
                                        />
                                        남성
                                    </label>
                                    <label>
                                        <input 
                                            name="gender"
                                            className="info__radio"
                                            type="radio" />
                                        직접지정
                                    </label>
                                    <div className="info__help">
                                        <button className="info__help__btn">
                                            도움말
                                        </button>
                                        {/* <div className="info__help__box box">  
                                            <p className="box__desc">
                                                나중에 프로필에서 회원님의 성별을 볼 수 있는 사람을 변경할 수 있습니다. 
                                                다른 성별을 선택하거나 성별을 밝히고 싶지 않은 경우 직접 지정을 선택하세요.
                                            </p>
                                            <div className="box__btn">
                                                <button className="box__btn-normal box__btn-dark">
                                                    닫기
                                                </button>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="info__gender input">
                                        <select className="info__gender__form">
                                            <option selected disabled>회원님을 어떻게 지칭할건지 선택하세요</option>
                                            <option>여성: "생일을 축하해주세요!"</option>
                                            <option>남성: "생일을 축하해주세요!"</option>
                                            <option>여러 명: "생일을 축하해주세요!"</option>
                                        </select>
                                        <p className="info__gender__desc">
                                            선택한 항목이 모든 사람에게 공개됩니다.
                                        </p>
                                        <input 
                                            className="input__signup input__signup-m"
                                            type="text" 
                                            placeholder="성별(선택 사항)" 
                                        />
                                    </div>
                                </div>
                                <p className="signup__form__desc">
                                    가입하기 버튼을 클릭하면 Facebook의 <em>약관</em>, <em>데이터 정책</em> 및 <em>쿠키 정책</em>
                                    에 동의하게 됩니다. Facebook으로부터 SMS 알림을 받을 수 있으며 알
                                    림은 언제든지 옵트 아웃할 수 있습니다.
                                </p>
                                <button className="signup__form__btn">
                                    가입하기
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
                <footer className="signin__footer">
                    <div className="signin__footer__inbox footer inbox">
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
