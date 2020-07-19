import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import '../plugins/http.js'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component:Login
  },
  {
    path: "/home",
    name: "Home",
    //当我们的路径为“/home”时，重定向为“/welcome”欢迎界面
    redirect:"/welcome",
    //懒加载：使用到的时候才加载
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    children:[
        {
      path: "/about",
      name:"About",
      component: ()=>
        import('../views/About.vue')
    },
      {
        path: "/welcome",
        name: "Welcome",
        component: () =>
          import('../views/Welcome.vue')
      },
      {
        path: "/pms/product",
        name: "Product",
        component:() =>
          import('../views/pms/Product.vue')
      }
    ]
  }

];

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
});

export default router;
