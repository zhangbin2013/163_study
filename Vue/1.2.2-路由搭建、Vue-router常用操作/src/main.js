// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  './assets/css/css.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// router.beforeEach((to, from, next) => {
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

//   const nextRoute = ['News'];
//   let isLogin = false;  // 是否登录  global.isLogin

//   // 未登录状态；当路由到nextRoute指定页时，跳转至login
//   if (nextRoute.indexOf(to.name) >= 0) {  
//     if (!isLogin) {
//       router.push({ name: 'Login' })
//     }
//   }
//   // 已登录状态；当路由到login时，跳转至home 
//   if (to.name === 'Login') {
//     if (isLogin) {
//       router.push({ name: 'Home' });
//     }
//   }
//   next();
// });


//全局后置钩子。
router.afterEach((to, from) => {
 
    router.push({ name: 'Login' }); // 跳转login
 
});
