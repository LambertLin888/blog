<template>
  <mt-loadmore ref="loadmore" :top-method="refresh" class="g-com-table">
    <ul>
      <nuxt-link
        v-for="item in articleList"
        :key="item.id"
        :to="{name:'article-detail-id',params:{id:item.id}}"
      >
        <li class="item">
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
          <img
            v-if="item.thumb"
            :src="item.thumb"
            :onerror="defaultThumb"
            class="img-blur"
            alt="img"
          >
        </li>
      </nuxt-link>
    </ul>
    <p class="loading">{{ loadMessage }}</p>
  </mt-loadmore>
</template>

<script>
import { getArticleList } from '~/plugins/api.js'
import { formatDate, formatArticleContent } from '~/assets/js/utils.js'
export default {
  props: {
    sort: {
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
      defaultThumb: "this.src='http://www.linbenjian.com/images/face.jpg'",
      loadMessage:
        this.count >= this.pagesize ? '' : '—————— 我是有底线的 ——————',
      isLoading: false
    }
  },
  computed: {
    loadMoreEnable() {
      return this.articleCount > this.pagesize * this.page
    }
  },
  watch: {
    isLoading: function(val) {
      if (val) {
        this.loadMessage = '加载中 ......'
      } else if (!this.loadMoreEnable) {
        this.loadMessage = '—————— 我是有底线的 ——————'
        window.removeEventListener('scroll', this.scrollhandle)
        return
      }
    }
  },
  mounted() {
    if (this.loadMoreEnable) {
      this.addScrollListen()
    }
  },
  methods: {
    refresh() {
      this.page = 1
      this.getData()
      this.$refs.loadmore.onTopLoaded()
      this.addScrollListen()
    },
    loadMore() {
      if (this.isLoading) {
        return
      }
      this.page++
      this.getData()
    },
    getData() {
      this.loadMessage = 'Loading......'
      this.isLoading = true
      const sort = this.sort ? '-' + this.sort : null
      getArticleList({
        params: {
          page: this.page,
          pagesize: this.pagesize,
          sort
        }
      }).then(res => {
        this.loadMessage = ''
        this.isLoading = false
        let { count, list } = res.data
        list = formatArticleContent(list)
        this.articleList = this.page == 1 ? list : this.articleList.concat(list)
        this.articleCount = count
      })
    },
    scrollhandle() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight //滚动条到底部的条件
      if (scrollTop + windowHeight + 20 > scrollHeight) {
        this.loadMore()
      }
    },
    addScrollListen() {
      window.addEventListener('scroll', this.scrollhandle)
    }
  }
}
</script>>
<style lang="less" scoped>
@import url('../assets/css/components/table.less');
</style>
