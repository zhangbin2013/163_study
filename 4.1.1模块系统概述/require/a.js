/**
 *Created by bin on 2019/5/27
 */
define(['b'], function (b) {
    console.log(b);
    var Hello = function () {
        console.log('hello work');
    }
    return { // 接口对象
        Hello: Hello
    }
})
