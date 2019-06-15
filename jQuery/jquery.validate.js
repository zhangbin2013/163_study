(function (root, factory, plugin) {
    factory(jQuery, plugin);
})(this, function ($, plugin) {

    //默认配置项
    var DEFAULTS = {
        plugName: "dv",
        initEvent: "input",
        initError: "填写错误，请重新输入"
    };

    //基本的功能诉求
    var RULES = {
        "email": function () {
            return /^\w+@\w+\.\w+$/.test(this.val())
        },
        "password": function () {
            return /^\d{6,8}$/.test(this.val());
        }
    };

    //校验 form 表单
    $.fn[plugin] = function (option) {
        console.log(option);
        if (!this.is("form")) {
            return this;
        }
        $.extend(this, DEFAULTS, option);
        var _this = this;
        this.$finds = this.find("input");
        this.$finds.on(this.initEvent, function () {
            var _this_ = this;
            $.each(RULES, function (key, fn) {
                console.log(key);
                var $findName = $(_this_).data(_this.plugName + "-" + key);
                var $findErrInfo = $(_this_).data(_this.plugName + "-" + key+"-error");
                if($findName){
                    var result = fn.call($(_this_));
                    $(_this_).siblings('p').remove();
                    if(!result){
                        $(_this_).after('<p style="color:red">'+$findErrInfo || _this.initError +'</p>')
                    }
                }
            })
        });
    }

    //功能扩展
    $.fn[plugin].extendRules = function (option) {
        $.extend(RULES, option);
    }
}, "validate");
