<template>
  <ul class="g-com-table">
    <li v-for="item in articleList" :key="item.id" class="item">
      <nuxt-link :to="{name:'article-detail-id',params:{id:item.id}}">
        <div :class="!item.thumb?'content hike-content':'content'">
          <span class="title">{{ item.title }}</span>
          <p class="des ellipsis">{{ item.originalContent }}</p>
          <div class="meta">
            <!-- <span>
              &nbsp;
              <i class="el-icon-date"/>
              &nbsp;{{ item.createTime }}
            </span>-->
            <span>
              <i class="el-icon-view"/>
              浏览({{ item.readingCount }})&nbsp;
            </span>
            <span class="icon-type">&nbsp;{{ item.category }}</span>
          </div>
        </div>
        <img :src="item.thumb" :onerror="defaultThumb" class="img-blur" alt="120">
      </nuxt-link>
    </li>
  </ul>
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
      articleCount: this.count,
      page: 1,
      defaultThumb:
        "this.src='https://himg.bdimg.com/sys/portrait/item/e1ace7bd91e99985e9a39ee4bea0e6ada3e789889b28.jpg'"
    }
  },
  computed: {
    showBtnMore() {
      return this.articleCount > this.pagesize * this.page
    }
  },
  methods: {
    getData() {
      getArticleList({
        params: {
          page: ++this.page,
          pagesize: this.pagesize,
          category: this.category
        }
      }).then(res => {
        let { count, list } = res.data
        list = formatArticleContent(list)
        this.articleList = this.page == 1 ? list : this.articleList.concat(list)
        this.articleCount = count
      })
    }
  }
}
</script>>
<style lang="less" scoped>
@import url('../assets/css/components/table.less');
</style>
