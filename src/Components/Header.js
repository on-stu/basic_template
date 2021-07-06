import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { authService } from '../firebase';

function Header({userObj, isLoggedIn}) {
    const history = useHistory();

    const Logout = () => {
        authService.signOut();
        history.push('/');
        window.location.reload();
    }
    
    return (
        
        <div className="header">
            <div className="header__container">
                <Link to="/">
                <div className="header__logo">
                    <h1>Totlics</h1>
                </div>
                </Link>
                <div className="header__center">
                    <input type="text" placeholder="강의 찾기" />
                    <SearchIcon />
                </div>
                    {isLoggedIn ? (
                        <div className="header__right">
                            <Link to="/mypage"><Button>마이 페이지</Button></Link>
                            <Button onClick={Logout} >로그아웃</Button>
                        </div>
                    ):(
                        <div className="header__right">
                            <Link to="/login"><Button>로그인</Button></Link>
                            <Link to="/register"><Button>회원가입</Button></Link>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Header
