<template>
  <div class="g-com-table">
    <li
      v-for="item in articleList"
      :key="item.id"
      class="item">
      <a
        class="wrap-img"
        href="/p/4044bc2f7533"
        target="_blank">
        <img
          class="img-blur"
          src="//upload-images.jianshu.io/upload_images/8717551-d436ce17e20673c9.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
          alt="120">
      </a>
      <div class="content">
        <nuxt-link

          :to="{name:'article-detail-id',params:{id:item.id}}">
          <span
            class="title"
            target="_blank"
            href="/p/4044bc2f7533">{{ item.title }}</span></nuxt-link>
        <p class="des">
          {{ item.des }}
        </p>
        <div class="meta">
          <span>&nbsp;<i class="el-icon-date"/>&nbsp;{{ item.createTime }}</span>
          <span>&nbsp;<i class="el-icon-view"/>&nbsp;浏览(115)&nbsp;</span>
          <span class="icon-type">&nbsp;{{ item.category }}</span>
        </div>
      </div>
    </li>
    <el-Pagination
      :page-size="pagesize"
      :total="articleCount"
      class="pagination"
      background
      layout="prev, pager, next"
      @current-change="getData"
    />
  </div>
</template>

<script>
import { getArticleList } from '~/plugins/api.js'
import { formatDate, formatArticleContent } from '~/assets/js/utils.js'
export default {
  props: {
    category: {
      type: String,
      default: ''
    },
    pagesize: {
      type: Number,
      default: 7
    },
    count: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      articleList: this.list,
      articleCount: this.count
    }
  },
  methods: {
    getData(page) {
      getArticleList({
        params: { page, pagesize: this.pagesize, category: this.category }
      }).then(res => {
        let { count, list } = res.data
        this.articleList = formatArticleContent(list)
        this.articleCount = count
      })
    }
  }
}
</script>>
<style lang="less" scoped>
@import url('../assets/css/components/table.less');
</style>
