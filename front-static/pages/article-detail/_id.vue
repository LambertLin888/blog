
<template>
  <div class="g-detail">
    <Navbar/>
    <el-row >
      <el-col
        :span="10"
        :offset="7">
        <h1 class="title">
          <span>{{ title }}</span>
        </h1>
        <el-row class="tips">
          <el-col>
            <div class="meta">
              <span>&nbsp;<i class="el-icon-date"/>&nbsp;{{ createTime }}</span>
              <span>&nbsp;<i class="el-icon-view"/>&nbsp;浏览({{ readingCount }})&nbsp;</span>
              <span class="icon-type">&nbsp;{{ category }}</span>
            </div>
          </el-col>
        </el-row>
        <div
          class= "html-content"
          v-html="originalContent" />
      </el-col>
      <el-col
        :offset="1"
        :span="4" >
        <Push/>
      </el-col>
    </el-row>
    <Footer/>
  </div>
</template>


<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Push from '~/components/Push.vue'
import { getArticleDetail } from '~/plugins/api.js'
import { formatArticleContent } from '~/assets/js/utils.js'
export default {
  components: {
    Navbar,
    Footer,
    Push
  },
  data() {},
  async asyncData({ app, params }) {
    debugger
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
        { hid: 'author', content: 'brian' }
      ]
    }
  }
}
</script>
<style lang="less">
@import './../../assets/css/pages/article-detail.less';
</style>
