import React, { useEffect, useState } from 'react';
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
            window.alert(err);
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
                </div>
            </div>
        </div>
    )
}

export default MyPage
