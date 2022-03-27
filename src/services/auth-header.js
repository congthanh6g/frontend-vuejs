export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user.token) {

        return {
            Authorization :  'Bearer ' + user.token,
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        };
    }
    else {
        return {};
    }
}
//bearer 