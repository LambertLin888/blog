<template>
  <div class="about">
    <Navbar :active="active"/>
    <div class="main"/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      active: 'about'
    }
  }
}
</script>>
<style lang="less">
@import url('../../assets/css/pages/about.less');
</style>
