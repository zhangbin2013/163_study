<template>
  <div id="app">
      <appheader></appheader>
      <!-- 路由匹配到的组件将渲染在这里 -->
      <!-- <keep-alive>  标签内置组件用来缓存路由的-->
        <transition name="fade" mode="out-in">
          <!-- <keep-alive> -->
            <router-view></router-view>
          <!-- </keep-alive> -->
        </transition>
  </div>
</template>
<script>

import appheader from './components/Header'

export default {
  components:{
    appheader
  }
}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active{
 transition: all .3s;
}
.fade-enter, .fade-leave-to{
 opacity: 0;
}
</style>
