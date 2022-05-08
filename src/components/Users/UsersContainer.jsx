import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {follow, setCurrentPage,setTotalUsersCount, setUsers, setFetching, unfollow, setIsFollowingProgress,requestUsers} from "../../redux/users-reducer";
import * as axios from 'axios';
import Preloader from '../common/preloader/Preloader';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';


class UsersContainer extends React.Component {
 
    componentDidMount(){
      
       this.props.getUsers(this.props.currentPage);
    }
    onPageChanged=(pageNumber) =>{
        this.props.getUsers(pageNumber).then(response => {
            this.props.setUserProfile(response.data);
        })
    }
    
    render(){
        
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users count= {this.props.count}
        pageSize = { this.props.pageSize}
        currentPage = {this.props.currentPage}
        users = {this.props.users}
        follow = {this.props.follow}
        isFetching = {this.props.isFetching}
        unfollow = {this.props.unfollow}
        onPageChanged={this.onPageChanged}
        setIsFollowingProgress={this.setIsFollowingProgress}/>
        </>
    }


}   
let mapStateToProps = (state) => {
    debugger
    return {
        users: state.usersPage.users,
        pageSize: getPageSize(state),
        count: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        setIsFollowingProgress: getFollowingInProgress(state),
    }
}

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, setIsFollowingProgress, getUsers: requestUsers})(UsersContainer);
 