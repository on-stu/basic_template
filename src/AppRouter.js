import React, { useState } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './Pages/MainPage';
import MyPage from './Pages/MyPage';
import LogInPage from './Pages/LogInPage';
import RegisteringPage from './Pages/RegisterPage';

function AppRouter({userObj, isLoggedIn}) {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route path="/mypage">
                    <MyPage/>
                </Route>
                <Route path="/login">
                    <LogInPage />
                </Route>
                <Route path="/register">
                    <RegisteringPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
