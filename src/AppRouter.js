import React, { useState } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './Pages/MainPage';
import MyPage from './Pages/MyPage';
import LogInPage from './Pages/LogInPage';
import RegisterPage from './Pages/RegisterPage';
import RegisteringPage from './Pages/RegisteringPage';
import Header from './Components/Header';
import Footer from './Components/Footer';

function AppRouter({userInfo, setUserInfo, userObj, isLoggedIn}) {
    const [userType, setUserType] = useState("");

    return (
        <Router>
            <Header userObj={userObj} isLoggedIn={isLoggedIn} />
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route exact path="/mypage">
                    <MyPage setUserInfo={setUserInfo} userInfo={userInfo} />
                </Route>
                <Route exact path="/login">
                    <LogInPage />
                </Route>
                <Route exact path="/register">
                    <RegisterPage userType={userType} setUserType={setUserType}/>
                </Route>
                <Route exact path="/registering">
                    <RegisteringPage setUserInfo={setUserInfo} userInfo={userInfo} userType={userType} setUserType={setUserType}/>
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
