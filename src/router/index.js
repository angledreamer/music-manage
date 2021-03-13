import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login/Login'
import Index from '@/index/index'
import resetPwd from '@/page/resetPwd/resetPwd'

Vue.use(Router)

const router = {
  routes: [
    {
      path: '/index',
      component: Index,
      name: 'Index',
      meta: { title: '首页' }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { title: '登录' }
    },
    {
      path: '/resetPwd',
      name: 'resetPwd',
      component: resetPwd,
      meta: { title: '修改密码' }
    }
  ]
}

export default router
