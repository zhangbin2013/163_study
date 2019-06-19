<template>
   <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这个是about页面<br/>路由传参:{{agrs}}</h2>
   </div> 
</template>

<script>
export default {
  name: 'about',
  props:['agrs'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


