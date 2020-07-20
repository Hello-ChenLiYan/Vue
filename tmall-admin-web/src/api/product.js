import axios from '../plugins/http.js'

/*
 * 查询所有商品
 */
export function api_productList(params) {
    return axios({
        url:'/product/list',
        method:'get',
        params:params
    })
}

/**
 * 修改商品上架、推荐、新品状态
 * @param type  具体接口名称
 * @param params  参数
 */
export function api_updateProductStatus(type, params) {
    console.log("api_updateProductStatus", params)
    return axios({
        url: `/product/update/${type}`,
        method: 'post',
        data: params
    })
}