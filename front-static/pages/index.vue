
<template>
  <div>
    <Navbar :active="active"/>
    <el-row class="main">
      <el-col
        :span="11"
        :offset="5">
        <Table
          :pagesize = "pagesize"
          :list = "list"
          :count = "count"/>
      </el-col>
      <el-col
        :offset="2"
        :span="5" >
        <el-card class="about">
          <div class="about-title">about Me</div>
          <div class="about-name"/>
          <div class="about-content">
            <p>lambert-lin</p>
            <p>Web前端工程师</p>
            <p>benjianlin@foxmail.com</p>
          </div>
        </el-card>
        <!-- 近期文章开始 -->
        <el-card class="article">
          <div class="article-title">近期文章</div>
          <hr>
          <nuxt-link
            v-for="item in lately"
            :key="item._id"
            :to="{name:'article-detail-id',params:{id:item._id}}"
            class="article-link">
            <i class="el-icon-edit"/>&nbsp;&nbsp;{{ item.title }}
          </nuxt-link>
        </el-card>
        <!-- 近期文章结束 -->

        <!-- 友情链接开始 -->
        <el-card class="link">
          <div class="link-title">友情链接</div>
          <hr>
          <div class="link-content">
            <a
              href="/"
              target="_blank"
              class="link-url">虚位以待</a>
            <a
              href="/"
              target="_blank"
              class="link-url">虚位以待</a>
          </div>
        </el-card>
        <!-- 友情链接结束 -->
      </el-col>
    </el-row>
    <Footer/>
  </div>
</template>

<script>
import Table from '~/components/Table.vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import { getArticleList } from '~/plugins/api.js'
import { formatArticleContent } from '~/assets/js/utils.js'
export default {
  components: {
    Navbar,
    Footer,
    Table
  },
  data() {
    return {
      active: 'index'
    }
  },
  async asyncData({ app }) {
    let pagesize = 7
    let options = { page: 1, pagesize }
    let { data } = await getArticleList({ params: options })
    let { list, count } = data
    list = formatArticleContent(list)
    return { list, count, pagesize }
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
@import url('../assets/css/pages/index.less');
</style>
