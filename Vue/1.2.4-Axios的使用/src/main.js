// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import  './assets/css/css.css'

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// axios.defaults.baseURL = 'http://127.0.0.1:8080/';

// http request 拦截器
axios.interceptors.request.use(
  
  config => {
   
    let token=""; 
    //config.data = JSON.stringify(config.data);  
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    //判断是否存在ticket，如果存在的话，则每个http header都加上ticket
    if (token) {///if (cookie.get("token")) {
        //用户每次操作，都将cookie设置成2小时
        // cookie.set("token",cookie.get("token") ,1/12)    
　　　　 //config.headers.token = cookie.get("token");
        //console.log(1);
　　　　 config.headers.token = token;  
    }
    
    return config;//如果不返回config 请求一直发送不出去
  },
  error => {
    console.log(err) 
    return Promise.reject(error.response);
  });

// 响应拦截器
axios.interceptors.response.use(
  response => {
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (response.status === 200) {
          return Promise.resolve(response);
      } else {
          return Promise.reject(response);
      }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
      if (error.response.status) {
          switch (error.response.status) {
              // 401: 未登录
              // 未登录则跳转登录页面，并携带当前页面的路径
              // 在登录成功后返回当前页面，这一步需要在登录页操作。
              case 401:
                  router.replace({
                      path: '/Login',
                      query: {
                          redirect: router.currentRoute.fullPath
                      }
                  });
                  break;

              // 403 token过期
              // 登录过期对用户进行提示
              // 清除本地token和清空vuex中token对象
              // 跳转登录页面
              case 403:
              //element-ui Toast组件 提示用
                  Toast({
                      message: '登录过期，请重新登录',
                      duration: 1000,
                      forbidClick: true
                  });
                  // 清除token
                  localStorage.removeItem('token');
                  store.commit('loginSuccess', null);
                  // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                  setTimeout(() => {
                      router.replace({
                          path: '/Login',
                          query: {
                              redirect: router.currentRoute.fullPath
                          }
                      });
                  }, 1000);
                  break;

              // 404请求不存在
              case 404:
                  router.replace({
                      path: '/Login',
                      query: {
                          redirect: router.currentRoute.fullPath
                      }
                  });
                  // Toast({
                  //     message: '网络请求不存在',
                  //     duration: 1500,
                  //     forbidClick: true
                  // });

                  break;
              // 其他错误，直接抛出错误提示
              default:
                  Toast({
                      message: error.response.data.message,
                      duration: 1500,
                      forbidClick: true
                  });
          }
          return Promise.reject(error.response);
      }

});




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
// router.afterEach((to, from) => {
 
//     router.push({ name: 'Login' }); // 跳转login
 
// });
