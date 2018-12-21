<template>
  <div>
    <Tabbar :active="active"/>
    <div class="main">
      <Table :pagesize="pagesize" :list="list" :count="count"/>
    </div>
    <Tabbar :active="active"/>
  </div>
</template>

<script>
import Table from '~/components/Table.vue'
import Tabbar from '~/components/Tabbar.vue'
import { getArticleList } from '~/plugins/api.js'
import { formatArticleContent } from '~/assets/js/utils.js'
export default {
  components: {
    Tabbar,
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
          content: 'lambert,linbenjian,前端,个人博客,nuxt,dev-tool'
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
