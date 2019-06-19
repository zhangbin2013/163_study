/**
 *Created by bin on 2019/5/27
 */
define(['Modal/4.1.1模块系统概述/require/b'], function (b) {
    console.log(b);
    var Hello = function () {
        console.log('hello work');
    }
    return { // 接口对象
        Hello: Hello
    }
})
