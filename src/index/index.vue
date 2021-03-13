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
          <el-tab-pane label="用户管理" name="first">
            <el-collapse v-model="activeNames">
              <el-collapse-item name="1">
                <template slot="title">
                  <i style="color: blue; margin-left: 2%; font-size: 1.2em; font-style:normal; font-weight: bold;">用户信息管理</i>
                </template>
                <el-tabs class="user-table" type="border-card" :tab-position="tabPosition">
                  <el-table :data="userTableData" height="350" border
                    v-loading="loading"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.8)">
                    <el-table-column prop="userName" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="mobilePhone" label="手机号码" width="140">
                    </el-table-column>
                    <el-table-column prop="sex" label="性别" width="140">
                    </el-table-column>
                    <el-table-column prop="age" label="年龄" width="140">
                    </el-table-column>
                    <el-table-column prop="birthDay" label="生日" width="140">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                    <el-table-column label="操作">
                      <template slot-scope="scope">
                        <el-button size="small" type="primary" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></el-button>
                        <el-button size="small" type="danger" icon="el-icon-delete"  @click="handleDelete(scope.$index, scope.row)"></el-button>
                        <el-button size="small" type="info" icon="el-icon-user"  @click="handleDetail(scope.$index, scope.row)"></el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <div class="block" style="float: right; margin-top: 20px;">
                    <el-pagination
                      background
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage4"
                      :page-sizes="[100, 200, 300, 400]"
                      :page-size="100"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="400">
                    </el-pagination>
                  </div>
                </el-tabs>
              </el-collapse-item>
            </el-collapse>
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
import { userInfo } from '../api/index'
export default {
  name: 'app',
  data: function () {
    return {
      active: true,
      tabPosition: 'left',
      activeName: 'first',
      activeNames: ['1'],
      userTableData: [],
      hasClick: false,
      loading: false
    }
  },
  methods: {
    handleClick: function (tab, event) {
      var that = this
      console.log(tab)
      var params = {}
      that.hasClick = true
      if (tab.name === 'first' && that.hasClick) {
        that.loading = true
        userInfo(params)
          .then(res => {
            that.hasClick = false
            that.loading = false
            if (res.code === '000000') {
              that.userTableData = res.userInfo
              that.$message({
                message: res.message,
                type: 'success'
              })
            } else {
              that.$message({
                message: res.message,
                type: 'warning'
              })
            }
          })
          .catch(failResponse => {})
      }
      if (tab.name === 'second') {
      }
      if (tab.name === 'third') {
      }
      if (tab.name === 'fourth') {
      }
    },
    handleEdit: function (index, row) {
      console.log(index, row)
    },
    handleDelete: function (index, row) {
      var that = this
      console.log(index, row)
      that.$confirm('此操作将删除该用户信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        that.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        that.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleDetail: function (index, row) {
      console.log(index, row)
    },
    logout: function () {
      var that = this
      that.$router.push({path: '/page/login/login'})
    },
    resetPwd: function () {
      var that = this
      that.$router.push({path: '/page/resetPwd/resetPwd'})
    }
  },
  mounted: function () {
    var that = this
    var params = {}
    that.$nextTick(function () {
      userInfo(params)
        .then(res => {
          that.hasClick = false
          if (res.code === '000000') {
            that.userTableData = res.userInfo
            that.$message({
              message: res.message,
              type: 'success'
            })
          } else {
            that.$message({
              message: res.message,
              type: 'warning'
            })
          }
        })
        .catch(failResponse => {})
    })
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
  min-height: 500px;
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
main .user-table {
  min-width: 80%;
}
</style>
