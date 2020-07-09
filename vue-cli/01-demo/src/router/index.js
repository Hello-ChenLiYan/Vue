import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";//引入
import Login from '../views/Login.vue'

Vue.use(VueRouter);//使用模块

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
