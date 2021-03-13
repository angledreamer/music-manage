<template>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;">
      <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt="" />
      </div>
      <el-card style="width: 400px; margin-top: 15%;">
        <div slot="header" class="clearfix">
          <span class="login-title">修改密码</span>
        </div>
        <table class="login-table">
          <tr>
            <td>
              <el-input v-model="user.username" placeholder="请输入用户名" clearable></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <el-input type="password" v-model="user.oldPwd" placeholder="请输入原密码" show-password></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <el-input type="password" v-model="user.newPwd" placeholder="请输入新密码" show-password ></el-input>
            </td>
          </tr>
          <tr>
            <!-- 占两行-->
            <td colspan="2">
              <el-button style="width: 100px" type="primary" plain @click="resetPwd">确认</el-button>
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
        oldPwd: '',
        newPwd: ''
      },
      imgSrc: require('../../assets/img/background.jpg')
    }
  },
  methods: {
    resetPwd: function () {
      var that = this
      if (!that.user.username) {
        that.$message({
          message: '请输入登录名',
          type: 'warning'
        })
        return
      }
      if (!that.user.oldPwd) {
        that.$message({
          message: '请输入原密码',
          type: 'warning'
        })
        return
      }
      if (!that.user.newPwd) {
        that.$message({
          message: '请输入新密码',
          type: 'warning'
        })
        return
      }
      if (that.user.newPwd === that.user.oldPwd) {
        that.$message({
          message: '新密码不能与原密码相同，请重新输入',
          type: 'warning'
        })
        return
      }
      var params = {}
      params.userId = that.user.username
      params.oldPwd = that.user.oldPwd
      params.newPwd = that.user.newPwd
      loginIn(params)
        .then(res => {
          if (res.code === '000000') {
            that.$message({
              message: '修改密码成功',
              type: 'success'
            })
            that.$router.push({path: '/page/login/login'})
          } else {
            that.$message({
              message: res.message,
              type: 'warning'
            })
          }
        })
        .catch(failResponse => {})
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
