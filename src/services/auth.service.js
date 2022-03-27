import axios from 'axios';
const API_URL = 'https://heroku-springbackend.herokuapp.com/api/auth/';

class AuthService {
    login(user) {
        return axios
                    .post(API_URL + 'signin' , {
                        username : user.username ,
                        password : user.password
                    } , { headers : {
                        "Access-Control-Allow-Origin": "*"     
                    } })
                    .then(response => {
                        if(response.data.token) {
                            localStorage.setItem('user' , JSON.stringify(response.data));
                        }
                        return response.data;
                    });
    }
    logout() {
        localStorage.removeItem('user');
    }
}
export default new AuthService();