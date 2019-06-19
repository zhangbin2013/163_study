<template>
   <div class="hello">
    <h1>{{ testData }}</h1>
    <h2>这个是home页面</h2>
    <button @click="jump">编程式点击跳转到About页面</button>
   </div> 
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      testData: []
    }
  },
  //created 钩子用来在一个实例被创建之后执行该方法
  created () {
    this.getData();
  },
  
  methods: {
      jump(){
          this.$router.push("/about/args");//这里传递的是字符串,也可以是一个json对象,this.$router.push({path:'/Cart'});
      },
      getData () {
          //通过axios 别名 
          // this是指向当前vue实例，千万不能丢掉，不然会报方法或对象undefined
          // this.$http.get('/api/api/test.json').then(response => {
 
          //     this.testData = response.data;
          //     console.log(response.data);
          //     console.log(response.status);
          //     console.log(response.statusText);
          //     console.log(response.headers);
          //     console.log(response.config);

          // }).catch(error => {
          //     console.log(error);
          // })
          //通过axios API 
          this.$http({
            method: 'get',
            url: '/api/api/test.json'
          }).then(response => {
             // console.log(response.data);
              this.testData = response.data;
              console.log(response.data);
              console.log(response.status);
              console.log(response.statusText);
              console.log(response.headers);
              console.log(response.config);


          }).catch(error => {
              console.log(error);
          })

          //多个请求的做法
          // function getUserAccount() {
          //   return axios.get('/user/12345');
          // }

          // function getUserPermissions() {
          //   return axios.get('/user/12345/permissions');
          // }

          // axios.all([getUserAccount(), getUserPermissions()])
          //   .then(axios.spread(function (acct, perms) {
          //     // Both requests are now complete
          // }));



      }

  },
  

}
</script>


