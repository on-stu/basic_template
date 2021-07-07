import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './loginPage.css';
import { Link, useHistory } from 'react-router-dom';
import { authService } from '../firebase';

function LogInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        } else if(name === "password"){
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault(); /* 기본행위를 실행하지 말아라! */
        try{
            await authService.signInWithEmailAndPassword(email, password);
            history.replace('/mypage');
        }
        catch(error){
            window.alert(error.message);
        }
        
    };

    return (
        <>
            <div className="login">
                <div className="login__container">
                    <span className="login__title" ><h1>로그인</h1></span>
                    <form onSubmit={onSubmit}>
                        <div className="login__input">
                            <input type="text" onChange={onChange} name="email" value={email} placeholder="이메일" required />
                            <input type="password" onChange={onChange} name="password" value={password} placeholder="비밀번호" required />
                        </div>
                        <div className="login__btn">
                            <Button type="submit">로그인</Button>
                        </div>
                    </form>
                    <div className="login__authBtn">
                        <Link to="/register"><Button>회원가입</Button></Link>
                        <Button>비밀번호 찾기</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogInPage
