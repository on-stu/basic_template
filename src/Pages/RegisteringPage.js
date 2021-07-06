import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './register.css';
import { useHistory } from 'react-router-dom';
import { authService, dbService, firebaseInstance } from '../firebase';


function RegisteringPage({userInfo, setUserInfo, userType, setUserType}) {
    const history = useHistory();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickName, setNickName] = useState("");
    const [subject, setSubject] = useState("");
    const [introduction, setIntroduction] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        
        await authService.createUserWithEmailAndPassword(
            email,
            password
        )
        await authService.currentUser.updateProfile({
            displayName: nickName,
        })

        setUserInfo({
            displayName: nickName,
            email: email,
            userType: userType,
            createdAt: firebaseInstance.firestore.FieldValue.serverTimestamp(),
            subject: subject,
            introduction: introduction,
        }); 

        await dbService.collection("userInfo").add(userInfo);

        history.replace('/');
        window.location.reload();
    }

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);
        }else if(name === "nickName"){
            setNickName(value);
        }else if(name === "introduction"){
            setIntroduction(value);
        }else if(name === "subject"){
            setSubject(value);
        }
    }

    useEffect(() => {
        if(userType === ""){
            history.push("/register")
        }
        return userType;
    }, [])

    return (
        <>
            <div className="registering">
                <div className="register__container">
                    <span className="register__title" ><h1>{userType} 회원가입</h1></span>
                    <form onSubmit={onSubmit}>
                        <div className="register__input">
                            <input type="text" name="email" onChange={onChange} value={email} placeholder="이메일" required />
                            <input type="password" name="password" onChange={onChange} value={password} placeholder="비밀번호" required />
                            <input type="text" name="nickName" onChange={onChange} value={nickName} placeholder="이름 (닉네임)" required />
                            <input type="text" name="subject" onChange={onChange} value={subject} placeholder="과목 (ex:국어, 영어, ...)" required />
                            <textarea name="introduction" onChange={onChange} value={introduction} placeholder={userType + " 자기 소개글"}/>
                        </div>
                        <Button type="submit">회원가입</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisteringPage
