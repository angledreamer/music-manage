import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routeConfig from './router-config' // 引入router-config.js文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from 'store/dist/store.legacy.min.js'
Vue.use(ElementUI)

Vue.config.productionTip = false
// 加载路由中间件
Vue.use(VueRouter)
// 定义路由
const router = new VueRouter({
  routes: routeConfig
})
// eslint-disable-next-line no-new
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
