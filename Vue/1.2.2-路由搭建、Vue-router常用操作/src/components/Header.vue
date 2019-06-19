<template>
    <div class="header">
        <header>
            <ul>
                <li>
                    <router-link to="/">主页</router-link>
                </li>
                <li>
                    <router-link to="/News">新闻</router-link>
                </li>
                <li>
                    <router-link to="/Shequ">社区</router-link>
                </li>
                <li>
                    <router-link to="/About/args">关于我们</router-link>
                </li>
                 <li>
                    <router-link to="/Login">登录</router-link>
                </li> 
                 <li>
                    <router-link to="/Regist">注册</router-link>
                </li>                  
            </ul>
        </header>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
ul li{
    list-style: none;
    float: left;
    padding: 10px;
}
header{
    background-color: #666;
    height: 45px;
}
a{
    color: #fff;
}
</style>
 <!-- 
我们看到一个：
<router-link to="/">主页</router-link>
这个标签，官方文档解释很清楚：

<router-link> 组件支持用户在具有路由功能的应用中（点击）导航。 
通过 to 属性指定目标地址，默认渲染成带有正确链接的 <a> 标签
所以这个to后边跟的就是你跳转的路径名字，这个必须待有，不写会报错
启动服务器，你就看到了一个导航，有的可能看不到啊，你需要修改你原先里的东西
到这里这个导航就写完了，下边我们看看怎么配置跳转路径
-->