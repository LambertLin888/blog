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
        :span="4" >
        <Push/>
      </el-col>
    </el-row>
    <Footer/>
  </div>
</template>

<script>
import Table from '~/components/Table.vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Push from '~/components/Push.vue'
import { getArticleList } from '~/plugins/api.js'
import { formatArticleContent } from '~/assets/js/utils.js'
export default {
  components: {
    Navbar,
    Footer,
    Table,
    Push
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
@import url('../../assets/css/pages/index.less');
</style>
