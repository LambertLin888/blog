<template>
  <div class="about">
    <Navbar :active="active"/>
    <el-row>
      <el-col :span="10" :offset="7">
        <div class="main">
          <p>这是一套全栈使用js搭建的个人博客。</p>
          <!-- <p>引用前辈的一句话：“面对技术的高速发展和百花齐放，有时也感到疲倦烦躁。但是，每当看到它们带来的生产力的飞跃，让你一个人快速搞定前后端的全部开发时，就觉得这终究还是一条正确的道路。”</p>
          <p>没有什么是不变的,只有变化是永恒的,向互联网的前辈致敬!</p>-->
          <p>为了更深入的理解js全栈开发，感受js语言生态的发展，开发了这套博客系统。</p>
          <div class="content-item">
            <p class="title">技术选型:</p>
            <p>前端(PC端): nuxt+axios+elementUI+less+koa2+webpack</p>
            <p>前端(移动端): nuxt+axios+mintUI+less+koa2+webpack</p>
            <p>后台: vue2+axios+elementUI+less+webpack</p>
            <p>服务端: koa2+mongodb</p>
          </div>
          <div class="content-item">
            <p class="title">联系方式:</p>
            <p>e-mail:benjianlin@foxmail.com</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      active: 'about'
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
