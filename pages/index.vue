<template>
  <div @click="getArticle">
    <Navbar :active="active"/>
    <el-row
      type="flex"
      justify="center">
      <el-col
        :span="14"
        class="detail_title">
        <div>{{ title }}</div>
        <div
          class="time"
          @click="getArticle">发布时间：{{ time }}&nbsp;&nbsp;&nbsp;&nbsp;分类：{{ list === 'Front' ? '前端文章' : '后端文章' }}</div>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="center">
      <el-col
        :span="14"
        class="detail_content">
        <el-card>
          <div v-show="!content">暂无文章数据...</div>
          <div
            class="md markdown-body">
            {{ name }}</div>
        </el-card>
      </el-col>
    </el-row>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import { baseurl } from '~/plugins/url.js'
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      name: 'lambert num 1',
      active: 'index'
    }
  },
  async asyncData({ app, params }) {
    let json = { id: '5bebf7f7fc438e95d1fb42a9' }
    let result = await app.$axios.get(`${baseurl}/api/article/getArticleInfo`, {
      params: json
    })
    let { error, info } = result.data
    console.log('info:' + JSON.stringify(result.data))
    let { content, des, list, time, title } = info[0]
    return { title, des, content, list, time }
  },
  methods: {
    getArticle() {
      console.log('dianji')
    }
  },
  head() {
    return {
      title: 'linbenjian的个人博客,基于nuxt构建',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '林本剑的个人博客, 基于技术,分享日常积累的前端技术'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '林本剑,linbenjian,前端,个人博客,nuxt,dev-tool'
        },
        { hid: 'author', content: 'linbenjian' }
      ]
    }
  }
}
</script>


<style lang="less">
@import url('../assets/css/page/index.less');
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #ff00ff;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
}
</style>
