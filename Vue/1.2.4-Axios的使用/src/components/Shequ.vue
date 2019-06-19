<template>
   <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这个是Shequ页面-- 用户ID {{ $route.params.id }}</h2>
   </div> 
</template>

<script>
export default {
  name: 'Shequ',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

