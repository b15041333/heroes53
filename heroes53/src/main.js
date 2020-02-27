import Vue from 'vue'
import App from './App.vue'
import myrouter from './router/router.js'
// add、edit、list三个组件中均用到axios，为利于维护，因此在这里统一导入
// 给Vue实例的构造函数原型上添加属性axios，方便三个组件（其实是三个Vue实例使用axios）
import axios from 'axios'
/**
 * 参考axios的文档，对baseURL进行配置
 * 配置了baseURL之后，4种http请求的代码中都默认在baseURL的基础上拼接后缀进行请求
 * 比如：axios.get(http://localhost:3000/heroes/).then();
 * 改写为 axios.get('heroes/').then();
 */
axios.defaults.baseURL = 'http://localhost:3000/';
Vue.prototype.axios = axios

// 引入所需要的样式文件，样式文件没必要用对象去接收
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/index.css'

new Vue({
  el: '#app',
  router:myrouter,
  render: h => h(App)
})

// ES6关于模块的使用，提供了新的API：

// 导出模块
// 本文件中导入了一个App.vue，那么在App.vue中势必有导出的相关代码
// 在App.vue中找到了export default方法，后面跟一个对象，导出一个对象
// 可以类比node中学到的module.exports

// 导入模块
// import 对象名 form 路径
// import App from './App.vue' 可以类比node中学到的require('xx.js');语法


