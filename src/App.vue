<template>
  <div id="app">
    <div id="nav">
      <Navbar></Navbar>
    </div>
    <router-view/>
    <div id="footer">
      <MainFooter></MainFooter>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/layout/Navbar.vue'
import MainFooter from '@/components/layout/MainFooter.vue'
export default {
  components: {
    Navbar,
    MainFooter
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
