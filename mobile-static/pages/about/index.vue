<template>
  <div class="about">
    <div class="main">
      <div class="about-me">
        <img class="face" src="http://www.linbenjian.work/images/face.jpg">
        <p class="name">lambert</p>
        <p class="des">前端攻城狮一枚, 目前专注于js全栈开发</p>
        <p class="des">e-mail:benjianlin@foxmail.com</p>
      </div>
      <p class="head">关于本APP:</p>
      <p>为了更深入的理解js全栈开发，感受js语言生态的发展，开发了本APP。</p>
      <div class="content-item">
        <p class="title">技术选型:</p>
        <p>移动端: nuxt+axios+mintUI+less+webpack</p>
        <p>PC端: nuxt+axios+elementUI+less+webpack</p>
        <p>服务端: koa2+mongodb</p>
        <p>后台: vue2+axios+elementUI+less+webpack</p>
      </div>
    </div>
    <Tabbar :active="active"/>
  </div>
</template>
<script>
import Tabbar from '~/components/Tabbar.vue'
import Header from '~/components/Header.vue'
export default {
  components: {
    Tabbar,
    Header
  },
  data() {
    return {
      active: 'about',
      title: '我的',
      url: '/'
    }
  },
  head() {
    return {
      title: '关于本博客',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `简介、linbenjian's blog、博客`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `简介、linbenjian's blog、博客`
        },
        { hid: 'author', content: 'lambert' }
      ]
    }
  }
}
</script>>
<style lang="less">
@import url('../../assets/css/pages/about.less');
</style>
