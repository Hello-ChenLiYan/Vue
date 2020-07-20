import Vue from 'vue'
import axios from 'axios'
 import VueAxios from 'vue-axios'

//在vue对象中挂载$http属性
 Vue.use(VueAxios,axios);

axios.defaults.baseURL = 'http://118.89.176.28:8080'
axios.defaults.timeout = 15000

//拦截请求，拦截响应
axios.interceptors.request.use(
    function (config) {
        const token = window.sessionStorage.getItem('token');
        if (token){
            config.headers['Authorization'] = token
        }
        return config
    },function (error) {
        return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
        console.log('response');
        return response;
    },function (error) {
        return Promise.reject(error);
});

//默认导出对象，供其他者调用
export default axios