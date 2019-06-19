<template>
   <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这个是home页面</h2>
    <button @click="jump">编程式点击跳转到About页面</button>
   </div> 
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      jump(){
          this.$router.push("/about/args");//这里传递的是字符串,也可以是一个json对象,this.$router.push({path:'/Cart'});
       }
  }
}
</script>


