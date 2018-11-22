<template>
  <div>
    <Navbar :active="active"/>
    <el-row
      type="flex"
      justify="center"
      class="content-blog">
      <el-col :span="10">
        <nuxt-link
          v-for="item in list"
          :key="item._id"
          :to="{name:'article-detail-id',params:{id:item._id}}"
          class="box-href">
          <el-card
            class="box-card"
            shadow="hover">
            <h2 class="box-title">{{ item.title }}</h2>
            <div class="box-icon">
              <span><i class="el-icon-date"/>&nbsp;{{ item.time }}</span>
              <!-- <span><i class="el-icon-view"></i>&nbsp;115次阅读</span> -->
            </div>
            <div class="box-content">{{ item.des }}</div>
          </el-card>
        </nuxt-link>

        <el-pagination
          :page-size="5"
          :total="count"
          class="pagination"
          background
          layout="prev, pager, next"
          @current-change="pagination"/>
      </el-col>
      <!-- 右侧关于我 -->
      <el-col
        :span="5"
        :offset="1">
        <el-card class="about">
          <div class="about-title">about Me</div>
          <div class="about-content">
            <p>lambert</p>

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
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import { getArticleList } from '~/plugins/api.js'
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      name: 'lambert num 1'
      // active: 'index'
    }
  },
  async asyncData({ app }) {
    let json = { page: 1, pagesize: 5 }
    let { data } = await getArticleList({ params: json })
    let { list, count } = data
    let lately = list.slice(0, 4)
    let active = 'IT'
    return { list, count, lately, active }
  },
  methods: {
    pagination(page) {
      let json = { page, pagesize: 5 }
      getArticleList({ params: json }).then(res => {
        let { error, count, list } = res.data
        this.list = list
      })
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
@import url('../../assets/css/pages/index.less');
</style>
