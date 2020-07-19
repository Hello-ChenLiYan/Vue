import axios from '../plugins/http.js'
/**
 * 查询所有品牌
 */
export function api_brandList(params) {
    return axios.get('/brand/list', {
        params
    })
}