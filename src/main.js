// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入接口文档
import api from '@/api'
// 把api文件添加到原型中
Vue.prototype.$api = api

// 导入 Mint-UI 组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

Vue.config.productionTip = false

import 'normalize.css/normalize.css'
import '@/styles/index.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
  