import axios from '../plugins/http.js'

/**
 * 返回带所有类别的子类别
 */
export function api_listWithChildren() {
    return axios.get('/productCategory/list/withChildren')
}