import React, { useEffect, useState } from 'react';
import LectureCard from '../Components/LectureCard';
import { authService, dbService, firebaseInstance } from '../firebase';
import './mypage.css';

function MyPage() {
    const [userInfo, setUserInfo] = useState([]);

    const getUserName = async () => {
        try{
            const userName = await dbService.collection("userInfo")
            .where("email", "==", authService.currentUser.email)
            .get();
            userName.forEach(document => {
                const userInfoObj = {
                    ...document.data(),
                id: document.id,
                }
               setUserInfo(userInfoObj); 
            });
        } catch(err) {
            console.log(err);
        }
        
    }

    useEffect(()=>{
        getUserName();

        return () => console.log('cleanup')
    },[authService.currentUser])

    return (
        <div className="mypage">
            <div className="mypage__container">
                <div className="mypage__main">
                    <div className="mypage__welcome">
                        <h1>{userInfo.displayName} {userInfo.userType} 반갑습니다.</h1>
                    </div>
                    <div className="mypage__lectures__container">
                        <div className="mypage__lectures__title">
                            강의
                        </div>
                        <div className="mypage__lectures">
                            <LectureCard lectureName="영어 과외" lectureStudent="엄세정" notice="1일 뒤 과제" />
                            <LectureCard lectureName="영어 과외" lectureStudent="엄세정" notice="1일 뒤 과제" />
                            <LectureCard lectureName="영어 과외" lectureStudent="엄세정" notice="1일 뒤 과제" />
                        </div>
                    </div>
                    <div className="mypage__lectures__container">
                        <div className="mypage__lectures__title">
                            쪽지
                        </div>
                        <div className="mypage__lectures">
                            <LectureCard lectureName="영어 과외" lectureStudent="엄세정" notice="1일 뒤 과제" />
                            <LectureCard lectureName="영어 과외" lectureStudent="엄세정" notice="1일 뒤 과제" />
                            <LectureCard lectureName="영어 과외" lectureStudent="엄세정" notice="1일 뒤 과제" />
                        </div>
                    </div>
                    <div className="mypage__lectures__container">
                        <div className="mypage__lectures__title">
                            강의 공지
                        </div>
                        <div className="mypage__lectures">
                            <LectureCard lectureName="영어 과외" lectureStudent="엄세정" notice="1일 뒤 과제" />
                            <LectureCard lectureName="영어 과외" lectureStudent="엄세정" notice="1일 뒤 과제" />
                            <LectureCard lectureName="영어 과외" lectureStudent="엄세정" notice="1일 뒤 과제" />
                        </div>
                    </div>
                </div>
                <div className="mypage__right">
                    right
                </div>
            </div>
        </div>
    )
}

export default MyPage
