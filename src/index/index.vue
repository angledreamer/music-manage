<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header">
      <el-row>
        <el-col :span="24">
          <el-menu
            default-active="3"
            class="el-menu-demo"
            mode="horizontal"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">音乐管理</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
            <el-menu-item style="float: right">
              <el-button size="small" @click="resetPwd">修改密码</el-button>
            </el-menu-item>
            <el-menu-item style="float: right">
              <el-button size="small" @click="logout">退出登录</el-button>
            </el-menu-item>
            <el-menu-item style="float: right">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="main-right">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <div style="position: relative; height: 60px; width: 100%"></div>
          <el-tab-pane label="用户管理" name="first">
            <el-tabs :tab-position="tabPosition" style="min-height: 800px;">
              <el-tab-pane label="用户管理">
                用户管理
              </el-tab-pane>
              <el-tab-pane label="配置管理">
                配置管理
              </el-tab-pane>
              <el-tab-pane label="角色管理">
                角色管理
              </el-tab-pane>
              <el-tab-pane label="定时任务补偿">
                定时任务补偿
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'app',
  data: function () {
    return {
      active: true,
      tabPosition: 'left',
      activeName: 'first'
    }
  },
  methods: {
    handleClick: function (tab, event) {
      console.log(tab, event)
    },
    logout: function () {
      var that = this
      that.$router.push({path: '/page/login/login'})
    },
    resetPwd: function () {
      var that = this
      that.$router.push({path: '/page/resetPwd/resetPwd'})
    }
  }
}
</script>
 <style>
body {
  margin: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
}
/* 头部导航 */
header {
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  border-top: solid 4px #3091f2;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
header.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
header .el-menu-demo {
  padding-left: 50px !important;
}
/* 主内容区 */
main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 800px;
  border: solid 40px #e9ecf1;
  background-color: #fcfcfc;
}
main .main-left {
  text-align: center;
  width: 200px;
  float: left;
}
main .main-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  /* padding: 50px 70px; */
}
main .el-menu {
  background-color: transparent !important;
}
</style>
