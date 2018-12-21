
<template>
  <div class="g-detail">
    <!-- <Header :title="title" :path="path" :toName="toName"/> -->
    <h1 class="title">
      <span>{{ title }}</span>
    </h1>
    <div class="tips">
      <div class="meta">
        <span>
          &nbsp;
          <i class="el-icon-date"/>
          &nbsp;{{ createTime }}
        </span>
        <span>
          &nbsp;
          <i class="el-icon-view"/>
          &nbsp;浏览({{ readingCount }})&nbsp;
        </span>
        <span class="icon-type">&nbsp;{{ category }}</span>
      </div>
    </div>
    <div class="html-content" v-html="originalContent"/>
    <nuxt-link to="/">
      <div class="back-index">
        <span>回到博客首页</span>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
// import Header from '~/components/Header.vue'
import { getArticleDetail } from '~/plugins/api.js'
import { formatArticleContent } from '~/assets/js/utils.js'
export default {
  components: {
    // Header
  },
  data() {
    return {
      title: '文章详情',
      path: '',
      toName: '返回'
    }
  },
  async asyncData({ app, params }) {
    let result = await getArticleDetail({ params: { id: params.id } })
    let { status, data } = result.data
    return formatArticleContent(data)
  },

  getArticle(id) {
    getArticleDetail({
      params: { id }
    }).then(result => {
      if (result.data.status == 0) {
        let params = result.data.data
        params.category = params.category.split(',')
        this.detail = params
      }
    })
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: `${this.des}` },
        { hid: 'keywords', name: 'keywords', content: `${this.keywords}` },
        { hid: 'author', content: 'linbenjian' }
      ]
    }
  }
}
</script>
<style lang="less">
@import './../../assets/css/pages/article-detail.less';
</style>
