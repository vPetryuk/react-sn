import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/user/',
    headers:{
        "Authorization": "Token e6f176eb3e5d166154b85a6a0242b4abcc1e9e30"
    }
});


export const usersAPI ={

    getUsers(currentPage = 1){
        return instance.get(`GCuser?page=${currentPage}`,{
        }).then(response => {
            debugger
            return response.data;
        });
},
getProfile(profile = 1){
    return instance.get(`GCuser/1`);

}
}