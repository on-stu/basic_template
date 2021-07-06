import React from 'react';
import { useHistory } from 'react-router';
import './registerPage.css';

function RegisterPage({userType, setUserType}) {
    const history = useHistory();
    
    const onClickStudent = (event) => {
        setUserType("학생");
        history.push('/registering');
        console.log(userType);
        
    }

    const onClickTeacher = (event) => {
        setUserType("개인 선생님");
        history.push('/registering');
        console.log(userType);
    }

    const onClickAcademy = (event) => {
        setUserType("학원");
        history.push('/registering');
        console.log(userType);
    }

    return (
        <>
            <div className="register">
                <div className='userType' onClick={onClickStudent}>
                    <img className="studentCard" alt=""/>
                    <div className="userType__info">
                        <h2>학생</h2>
                        <h4>저는 학생이에요, 여러 선생님들의 강의를 듣고 싶어요!</h4>
                        <h3>학생으로 가입하기</h3>
                    </div>
                </div>
                <div className='userType' onClick={onClickTeacher}>
                    <img className="teacherCard" alt="" />
                    <div className="userType__info">
                        <h2>개인 선생님</h2>
                        <h4>저는 개인 선생님이에요, 많은 학생들에게 질 좋은 강의를 해주고 싶어요!</h4>
                        <h3>개인 선생님으로 가입하기</h3>
                    </div>
                </div>
                <div className='userType' onClick={onClickAcademy}>
                    <img className="academyCard" alt="" />
                    <div className="userType__info">
                        <h2>학원</h2>
                        <h4>저는 학원 선생님이에요, 학원 원생들이 공부를 더 편하게 할 수 있도록 해주고 싶어요!</h4>
                        <h3>학원으로 가입하기</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage
