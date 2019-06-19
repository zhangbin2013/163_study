<template>
   <div class="hello">
    <h1>{{ testData }}</h1>
    <h2>这个是News页面</h2>
   </div> 
</template>

<script>
export default {
  name: 'News',
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
      getData () {
       
          // this是指向当前vue实例，千万不能丢掉，不然会报方法或对象undefined
          this.$http.get('/api/api/test1.php').then(response => {
             // console.log(response.data);
             if(response.data == "101"){
                 console.log("token 信息已经过期！");
             }else{
                 this.testData = response.data;
             }

          }).catch(error => {
              console.log(error);
          })


      }

  },
  
}
</script>
