import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入样式组件
import "./plugins/element.js"
//引入vue-cookies插件
import "./plugins/cookies.js"
//引入登录权限设置
import "./router/auth.js"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
