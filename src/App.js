import React, {useEffect} from 'react';
import './App.css';
import SignInContainer from './components/SignInForm/SIgnInContainer'
import SignUpContainer from './components/SignUpForm/SIgnUpContainer'
import {connect} from "react-redux";
import {checkToken} from "./services/auth.service";
import {BrowserRouter, Route, Router} from "react-router-dom";
import history from './history';
import {setAuth} from "./redux/actions/Auth.actions";
import MainContainer from "./components/Main/MainContainer";

function App(props) {

    useEffect(() => {
        f()
    }, [])

    async function f() {
        await checkToken().then((res) => {
            if (res) {
                props.setAuth()
                history.push('/main')
            }
        })
    }

    return (
        <BrowserRouter>
            <Router history={history}>

                <Route path="/signin" component={() => <SignInContainer/>}/>
                <Route path="/signup" component={() => <SignUpContainer/>}/>
                <Route path="/main" component={() => <MainContainer/>}/>

            </Router>
        </BrowserRouter>
    );
}

let mapDispatchToProps = dispatch => {
    return {
        setAuth: () => {
            dispatch(setAuth())
        },
    }
}

let mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})
export default
    connect(mapStateToProps, mapDispatchToProps)
(App);
