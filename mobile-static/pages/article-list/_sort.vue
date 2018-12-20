<template>
  <div class="g-article-category">
    <div class="main">
      <Table :category="category" :pagesize="pagesize" :list="list" :count="count"/>
    </div>
    <Tabbar :active="active"/>
  </div>
</template>

<script>
import Tabbar from '~/components/Tabbar.vue'
import Table from '~/components/Table.vue'
import { getArticleList } from '~/plugins/api.js'
import { formatArticleContent } from '~/assets/js/utils.js'

export default {
  components: {
    Tabbar,
    Table
  },
  data() {
    const active = this.$route.params.sort || ''
    const sort = this.$route.params.sort || ''
    return {
      active,
      sort
    }
  },
  async asyncData({ app, params }) {
    let pagesize = 7
    let options = { page: 1, pagesize, sort: '-' + params.sort }
    let { data } = await getArticleList({ params: options })
    let { list, count } = data
    list = formatArticleContent(list)
    return { list, count, pagesize }
  },
  head() {
    return {
      title: "lambert's blog,基于nuxt构建",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "lambert's blog, 基于技术,分享日常积累的前端技术"
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'linbenjian,lambert,前端,个人博客,nuxt,dev-tool'
        },
        { hid: 'author', content: 'linbenjian' }
      ]
    }
  }
}
</script>


<style lang="less">
@import url('../../assets/css/pages/article-list.less');
</style>
