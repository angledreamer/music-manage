<template>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;">
      <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt="" />
      </div>
      <el-card style="width: 400px; margin-top: 15%;">
        <div slot="header" class="clearfix">
          <span class="login-title">轻听音乐</span>
        </div>
        <table class="login-table">
          <tr>
            <td>
              <el-input v-model="user.username" placeholder="请输入用户名" clearable></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <el-input type="password" v-model="user.password" placeholder="请输入密码" show-password @keydown.enter.native="doLogin"></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>
          <tr>
            <!-- 占两行-->
            <td colspan="2">
              <!-- 点击事件的两种不同的写法v-on:click和 @click-->
              <el-button style="width: 100px" plain v-on:click="doRegister">注册</el-button>
              <el-button style="width: 100px" type="primary" plain @click="doLogin">登录</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
</template>

<script>

import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'
import { loginIn } from '../../api/index'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      imgSrc: require('../../assets/img/background.jpg')
    }
  },
  methods: {
    doLogin: function () {
      var that = this
      if (that.user.username.length < 5) {
        that.$message({
          message: '请输入不少于5位的登录名',
          type: 'warning'
        })
        return
      }
      if (!that.user.password) {
        that.$message({
          message: '请输入登录密码',
          type: 'warning'
        })
        return
      }
      var params = {}
      params.userId = that.user.username
      params.passWord = that.user.password
      loginIn(params)
        .then(res => {
          // console.log('-----------获取登录信息---------------')
          if (res.code === '000000') {
            that.$message({
              message: '登录成功',
              type: 'success'
            })
            that.$router.push({path: '/index/index'})
          } else {
            that.$message({
              message: res.message,
              type: 'warning'
            })
          }
        })
        .catch(failResponse => {})
    },
    doRegister: function () {
      // router.push()
    }
  }
}
</script>

<style scoped>
.background{
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
}
.login-title{
  font-weight: bold;
}
.login-table{
  margin-left: auto;
  margin-right: auto;
}
</style>
