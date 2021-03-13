// 引入组件

import Login from '@/page/login/Login'
import index from '@/index/index'
import resetPwd from '@/page/resetPwd/resetPwd'
export default [
  {
  // 配置路由，当路径为'/activePublic',使用组件activePublic
    path: '/page/login/Login', component: Login
  },
  {
    path: '/index/index', component: index
  },
  {
    path: '/page/resetPwd/resetPwd', component: resetPwd
  }
]
