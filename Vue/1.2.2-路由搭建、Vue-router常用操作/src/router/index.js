import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
//这是导入‘compoments/Home’将其命名为Home(可以自定义命名)
import News from '../components/News.vue'
import About from '../components/About.vue'
import Shequ from '../components/Shequ.vue'
import Login from '../components/Login.vue'
import Regist from '../components/Regist.vue'

Vue.use(Router)

export default new Router({
  //路由地址都是以"#"形式展示，但是有些时候，我们又希望路由地址中不出现"#"，那怎么办呢？
  mode:'history',
  routes: [
    {
      path: '/', 
      name: 'Home',
      component:Home
    },
    {
      path: '/News', 
      name: 'News',
      component:News
    },
    {
      path: '/Shequ/:id',
       //Shequ/a  	$route.params = {id="a"}
      name: 'Shequ',
      component:Shequ
    },
    {
      path: '/About/:agrs', 
      props:true,
      component:About
    },
    {
      path: '/Login', 
      name: 'Login',
      component:Login
    },
    {
      path: '/Regist', 
      name: 'Regist',
      component:Regist
    },
  ]

})



