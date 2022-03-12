import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component{
    // componentDidMount(){
    //     axios.get(`http://127.0.0.1:8000/user/GCuser`,{withCredentials:true})
    //     .then(response => {
    //         if (response.data.resultCode ===0){
    //         let {Id, email,login} =response.data.data;
    //         this.props.setAuthUserData(Id, email, login);
    //     }  
    //     });
    // }
    render(){
    return <Header {...this.props}/>
}
}
const mapStateToProps= (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);