<template>
  <div class="g-com-push">
    <p class="title">关于我</p>
    <div class="about-me">
      <img class="face" src="http://www.linbenjian.work/images/face.jpg">
      <p class="name">lambert</p>
      <p class="des">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前端攻城狮一枚, 目前专注于js全栈开发</p>
    </div>
    <p class="title">最新文章</p>
    <ul class="new-list">
      <nuxt-link
        v-for="item in newList"
        :key="item.id"
        :to="{name:'article-detail-id',params:{id:item.id}}"
      >
        <li class="item">{{ item.title }}</li>
      </nuxt-link>
    </ul>
    <p class="title">热门文章</p>
    <ul class="hot-list">
      <nuxt-link
        v-for="item in hotList"
        :key="item.id"
        :to="{name:'article-detail-id',params:{id:item.id}}"
      >
        <li class="item">{{ item.title }}</li>
      </nuxt-link>
    </ul>
    <p class="title">友情链接</p>
    <div class="friends-list">
      <a class="item" href="http://www.linbenjian.work">lambert's blog</a>
      <a class="item" href="https://github.com/LambertLin888?tab=repositories">github</a>
    </div>
  </div>
</template>

<script>
import { getArticleList } from '~/plugins/api.js'
import { formatArticleContent } from '~/assets/js/utils.js'
export default {
  data() {
    return {
      newList: [],
      hotList: []
    }
  },
  mounted() {
    this.getData({ sort: '-createTime' }).then(list => {
      this.newList = list
    })
    this.getData({ sort: '-readingCount' }).then(list => {
      this.hotList = list
    })
  },
  methods: {
    async getData(options) {
      let res = await getArticleList({
        params: {
          page: 1,
          pagesize: 6,
          ...options
        }
      })
      let list = this.formatList(res.data.list)
      return list
    },
    formatList(list) {
      list.map(item => {
        let { title, id } = item
        let newItem = { title, id }
        return newItem
      })
      return list
    }
  }
}
</script>>
<style lang="less" scoped>
@import url('../assets/css/components/push.less');
</style>
