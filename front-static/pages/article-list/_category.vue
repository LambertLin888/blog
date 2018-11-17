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
    const active = this.$route.params.category || 'index'
    return {
      active
    }
  },
  async asyncData({ app, params }) {
    let json = { page: 1, pagesize: 5, category: params.category }
    let { data } = await getArticleList({ params: json })
    let { list, count } = data
    let lately = list.slice(0, 4)
    return { list, count, lately }
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
