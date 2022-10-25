// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from "./store/index.js"
import {
	$http
} from "@escook/request-miniprogram"
// 设置请求的基地址
$http.baseUrl = "http://shop.bufantec.com/bufan/"
// 设置请求拦截 显示loading加载
$http.beforeRequest = function() {
	uni.showLoading({
		title: '加载中...'
	})

}
// 设置向应拦截器 关闭loading加载
$http.afterRequest = function() {
	uni.hideLoading()
}
// 在全局uni对象 （类似原生js的window对象）上挂载$http
uni.$http = $http
// 封装一个showMsg
uni.$showMsg = function(title = '数据请求失败', duration = 1500) {
	uni.showToast({
		title,
		duration
	})
}
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
