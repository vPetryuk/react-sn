const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_FETCHING = 'SET_FETCHING'
const SET_USER_DATA ='SET_USER_DATA'
let initialState = {
    userId :null,
    email: null,
    login:null,
    isAuth:false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        
        default:
            return state;
    }
}



export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login} })
export default authReducer; 