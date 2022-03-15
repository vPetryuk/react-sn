import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import testUtils from 'react-dom/test-utils';
import Login from './components/Login/Login';
import Preloader from './components/common/preloader/Preloader';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {initializeApp} from "./redux/app-reducer";

class App extends Component{
    componentDidMount() {
        this.props.initializeApp();
    }
    render(){
        if (!this.props.initialized) {
            return <Preloader/>
        }
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element = {<DialogsContainer /> }/>
                   
                    <Route path='/profile/*'
                           element={  <ProfileContainer /> }/>

                    <Route exact path='/users/*'
                    
                           element={<UsersContainer /> }/>
                     <Route path='/login'
                           element={<Login/>} />       
                    </Routes>
                </div>
            </div>
        )
}
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    
    connect(mapStateToProps, {initializeApp}))(App);