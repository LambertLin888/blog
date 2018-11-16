<template>
  <div>
    <Navbar :active="active"/>
    <el-row
      type="flex"
      justify="center">
      <el-col
        :span="14"
        class="detail_title">
        <div>{{ title }}</div>
        <div class="time">发布时间：{{ time }}&nbsp;&nbsp;&nbsp;&nbsp;分类：{{ type === '' ? '前端文章' : '后端文章' }}</div>
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
            class="md markdown-body"
            v-html="content"/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import { getArticleDetail } from '~/plugins/api.js'
import { debug } from 'util'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      active: 'index'
    }
  },
  async asyncData({ app, params }) {
    let json = { id: params.id }
    let result = await getArticleDetail({ params: json })
    let { error, list } = result.data
    let { content, des, type, time, title } = list[0]
    return { title, des, content, type, time }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: `${this.des}` },
        { hid: 'author', content: 'brian' }
      ]
    }
  }
}
</script>
<style lang="less">
@import './../../assets/css/pages/article-detail.less';
</style>
