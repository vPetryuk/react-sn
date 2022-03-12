import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/user/',
    headers:{
        "Authorization": "Token 172e2a0d29e0460c0bcd6326c26fce178dc3d4c4"
    }
});


export const usersAPI ={

    getUsers(currentPage = 1){
        debugger
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



