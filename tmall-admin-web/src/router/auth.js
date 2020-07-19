import router from './index.js'

//登录拦截，只放行“/login”
//白名单
const whileList = ['/login']
//将导航守卫挂载到$router
router.beforeEach((to, from, next) => {
     console.log(to, from)
    if (whileList.indexOf(to.path) !== -1) {
        console.log(whileList)
        next()
    } else {
        const token = window.sessionStorage.getItem('token')
        if (token) {
            next()
        } else {
            next('/')
        }
    }
})