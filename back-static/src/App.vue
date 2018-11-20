/** * @author linbenjian * @email benjianlin@foxmail.com * @create date
2018-11-20 11:13:36 * @modify date 2018-11-20 11:13:36 * @desc [description] */

<template>
  <div id="app">
    <Navbar :active="active" />
    <router-view class="router-view" />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      active: 'article-list'
    }
  },
  updated() {
    this.active = this.$route.name
  }
}
</script>
<style lang="less">
body {
  margin: 0px auto;
  max-width: 1300px;
}
a {
  text-decoration: none;
}
.router-view {
  margin-top: 30px;
}
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   z-index: 1;
//   text-align: center;
//   color: #2c3e50;
// }
</style>
