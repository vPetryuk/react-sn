import { usersAPI } from "../components/api/api";

const FOLLOW = '/user/FOLLOW';
const UNFOLLOW = '/user/UNFOLLOW';
const SET_USERS = '/user/SET_USERS';
const SET_CURRENT_PAGE = '/user/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = '/user/SET_TOTAL_USERS_COUNT';
const SET_FETCHING = '/user/SET_FETCHING'
const SET_IS_FOLLOWING_PROGRESS = '/user/SET_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [ ],
    pageSize: 3,
    count:0,
    currentPage:1,
    isFetching: false,
    setIsFollowingProgress: [1,2,3,4],
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, count: action.count }
        }
        case SET_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage:action.currentPage}
        }
        case SET_IS_FOLLOWING_PROGRESS:{
            return {
                ...state, followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }

        }
        default:
            return state;
    }
}


export const follow = (userId) => ({type: FOLLOW, userId })
export const unfollow = (userId) => ({type: UNFOLLOW, userId })
export const setUsers = (users) => ({type: SET_USERS, users })
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count })
export const setCurrentPage= (currentPage) => ({type: SET_CURRENT_PAGE, currentPage:currentPage})
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching })
export const setIsFollowingProgress = (isFetching) => ({type: SET_IS_FOLLOWING_PROGRESS, isFetching})

export const requestUsers = (currentPage) => {
    return(dispatch) =>{
    dispatch(setFetching(true));
    dispatch(setCurrentPage(currentPage))    
    usersAPI.getUsers(currentPage).then(data => {
      
        dispatch(setFetching(false));
        dispatch(setUsers(data.results));
        dispatch(setTotalUsersCount(data.count));
      
    });
}
}


export default usersReducer;