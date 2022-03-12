import React from 'react';

import * as axios from "axios";
import Profile from "./Profile"
import {connect} from "react-redux";
import { setUserProfile ,getUserProfile} from '../../redux/profile-reducer';
import { usersAPI } from '../api/api';
import {compose} from "redux";
import {Redirect, withRouter} from "react-router-dom";
class ProfileContainer extends React.Component{

    componentDidMount(){
       this.props.getUserProfile();
    }
    
    render(){
    return (
        
        <div>
            <Profile {...this.props} profile={this.props.profile}/>
            
        </div>
    )
}
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    
})
export default connect(mapStateToProps,{setUserProfile,getUserProfile})(ProfileContainer);
