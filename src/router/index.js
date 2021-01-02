import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/login/Login'
import Index from '@/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
