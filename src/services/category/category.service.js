import axios from 'axios'
let user = JSON.parse(localStorage.getItem('user'));
// const API_URL = 'http://localhost:8080/api/v1/category/';

class CategoryService
{
    getAllCategories(params)
    {
        return axios.get("https://heroku-springbackend.herokuapp.com/api/v1/category/admin/list" , { headers : {
            Authorization : 'Bearer ' + user.token
        } ,params}  );
    }
    getCategoryByName(params)
    {
        return axios.get("https://heroku-springbackend.herokuapp.com/v1/category/admin/list/getName" ,{ headers : {
            Authorization : 'Bearer ' + user.token
        } ,params} )
    }
    addCategory(data)
    {
        return axios.post("https://heroku-springbackend.herokuapp.com/api/v1/category/add" , data , { headers : {
            Authorization : 'Bearer ' + user.token
        } } );
    }

    deleteCategory(id)
    {
        return axios.delete(`https://heroku-springbackend.herokuapp.com/api/v1/category/delete/${id}` , {
            headers : {
                Authorization : 'Bearer ' + user.token
            }
        });
    }

    stateChange(id)
    {
        return axios.put(`https://heroku-springbackend.herokuapp.com/api/v1/category/statechange/${id}?isDeleted=false` , null , { headers : {
            Authorization : 'Bearer ' + user.token
        } });
    }
}

export default new CategoryService();