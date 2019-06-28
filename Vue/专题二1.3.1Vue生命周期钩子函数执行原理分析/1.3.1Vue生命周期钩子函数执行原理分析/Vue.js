(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Vue = factory());
})(this, function() {
	//Vue.options.components
	//Vue.component..  Vue.directive..
	var ASSET_TYPES = [
		'component',
		'directive',
		'filter'
	];

	var LIFECYCLE_HOOKS = [
		'beforeCreate',
		'created',
		'beforeMount',
		'mounted',
		'beforeUpdate',
		'updated',
		'beforeDestroy',
		'destroyed',
		'activated',
		'deactivated',
		'errorCaptured'
	];

	//全局配置对象
	var config = {
		optionMergeStrategies: Object.create(null),
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function hasOwn(obj, key) {
		return hasOwnProperty.call(obj, key)
	}

	var strats = config.optionMergeStrategies; // var strats = {}
	//自定义策略处理
	strats.data = function(parentVal, childVal, vm) {
		//组件的基本原理
		//聚焦到vm   是根实例 还是组件
		if (!vm) { // 组件
            if(childVal && typeof childVal !== "function"){
				console.error("data选项应该为函数 返回组件中每个实例的值")
			}
		}
	}

	//所有钩子函数的自定义策略  parentVal === undefined   childVal === function(){}   [function(){}]
	function mergeHook(parentVal, childVal) {
		//parentVal 数组
		return childVal ?
			parentVal ?
			parentVal.concat(childVal) :
			Array.isArray(childVal) ?
			childVal : [childVal] :
			parentVal
	}
	LIFECYCLE_HOOKS.forEach(function(hook) {
		strats[hook] = mergeHook;
	})
	// "所有" 选择的默认策略
	var defaultStrat = function(parentVal, childVal) {
		return childVal === undefined ?
			parentVal :
			childVal
	};


	function mergeOptions(parent, child, vm) {
		/*选项规范检测  Components  Props  Inject  Directives */
		var options = {};
		var key;
		for (key in parent) { //components
			mergeField(key);
		}
		for (key in child) { //components
			if (!hasOwn(parent, key)) {
				mergeField(key);
			}
		}
		//选项的策略处理 el data  生命周期的钩子函数  ....
		//自定义策略（strats对象）  默认策略
		function mergeField(key) {
			console.log(key) // count   strats.count  beforeCreate
			var strat = strats[key] || defaultStrat;
			options[key] = strat(parent[key], child[key], vm, key);
		}
		return options;
	}

	function callHook(vm, hook) {
		var handlers = vm.$options[hook];
		for (var i = 0, j = handlers.length; i < j; i++) {
			handlers[i].call(vm);
		}
	}

	function initMixin(Vue) {
		Vue.prototype._init = function(options) {
			var vm = this;
			console.log(Vue.options)
			//选项合并
			vm.$options = mergeOptions(Vue.options, options || {}, vm);
			callHook(vm, 'beforeCreate');
		}
	}

	//config
	function initGlobalAPI(Vue) {
		var configDef = {};
		configDef.get = function() {
			return config;
		}
		configDef.set = function(newval) {
			console.error("不要尝试修改Vue.config的引用")
		}
		Object.defineProperty(Vue, 'config', configDef); //监听你对Vue.config
	}

	function initExtend(Vue) {
		/*用于原型继承  缓存构造函数*/
		Vue.cid = 0;
		var cid = 1;
		Vue.extend = function(extendOptions) {
			extendOptions = extendOptions || {};
			var Super = this; //Super  === Vue
			var SuperId = Super.cid;
			//缓存检测 cachedCtors
			var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
			//缓存处理  cachedCtors[0] = 子类的引用
			if (cachedCtors[SuperId]) {
				return cachedCtors[SuperId]
			}
			var name = extendOptions.name || Super.options.name;
			if (name) {
				//validateComponentName(name);   //规范检测
			}

			//子类 构造函数
			var Sub = function VueComponent(options) {
				this._init(options);
			};
			//{}.__proto__ = Super.prototype = Vue.prototype
			Sub.prototype = Object.create(Super.prototype);
			Sub.prototype.constructor = Sub;
			Sub.cid = cid++;
			//Super == Vue  Vue.component  注册全局组件   Vue.options.components  内置的抽象组件
			ASSET_TYPES.forEach(function(type) {
				Sub[type] = Super[type];
			});
			console.log(1111)
			//组件在初始化 mergeOptions  选项的合并 => 规范的检测  => 策略的处理
			Sub.options = mergeOptions(
				Super.options,    //Vue.options
				extendOptions      //组件的选项对象
			);
			cachedCtors[SuperId] = Sub;
			return Sub;
		}
	}

	function Vue(options) {
		if (!(this instanceof Vue)) {
			console.error('Vue is a constructor and should be called with the `new` keyword');
		}
		this._init(options);
	}

	Vue.options = Object.create(null); //Vue.options = {}
	ASSET_TYPES.forEach(function(type) {
		Vue.options[type + 's'] = Object.create(null); //Vue.options.components
	});

	initMixin(Vue);
	initGlobalAPI(Vue);
	initExtend(Vue);
	return Vue;
});
