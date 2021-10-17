import axios from 'axios'
import Cookies from 'js-cookie'
let api = {
    BaseUrl: 'https://coreshop.paystar.ir/api/',

    get: function (path, token) {
        return axios({
            method: 'get',
            url: this.BaseUrl + path,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
    },

    getUrl: function (url, token) {
        return axios({
            method: 'get',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
    },

    put : function (path, body = {}) {
        return axios({
            method: 'put',
            url: this.BaseUrl + path,
            data: body,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
    },

    post: function (path, body = {}, token) {
        return axios({
            method: 'post',
            url: this.BaseUrl + path,
            data: body,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
    },
}


export default api

