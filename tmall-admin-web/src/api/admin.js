//登录相关请求
import axios from '../plugins/http.js'

//登录
export function api_login(username, password) {
    return axios
        .post('/admin/login',{
            username,password
        })
}

//注销，退出
export function api_logout() {
    return axios
        .post('/admin/logout')
}

//获取用户信息
export function api_info() {
    return axios.get('/admin/info')
}