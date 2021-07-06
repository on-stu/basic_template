import React, { useEffect } from 'react';
import { authService, dbService } from '../firebase';
import './mypage.css';

function MyPage({userInfo, setUserInfo}) {
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

    })

    return (
        <div className="mypage">
            <div className="mypage__container">
                <div className="mypage__main">
                    <h1>{userInfo.displayName}님 환영합니다!</h1>
                </div>
                <div className="mypage__right">
                    right
                </div>
            </div>
        </div>
    )
}

export default MyPage
