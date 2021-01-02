<template>
  <div id="app">
    <!-- <Login/> -->
    <Index/>
  </div>
</template>

<script>
import Login from './login/Login'
import Index from './index/index'

export default {
  name: 'App',
  components: {
    Login, Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
