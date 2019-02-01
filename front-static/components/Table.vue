<template>
  <div class="g-com-table">
    <ul>
      <li v-for="item in articleList" :key="item.id" class="item">
        <div :class="!item.thumb?'content hike-content':'content'">
          <nuxt-link :to="{name:'article-detail-id',params:{id:item.id}}">
            <span class="title">{{ item.title }}</span>
          </nuxt-link>
          <p class="des">{{ item.originalContent }}</p>
          <div class="meta">
            <span>
              &nbsp;
              <i class="el-icon-date"/>
              &nbsp;{{ item.createTime }}
            </span>
            <span>
              &nbsp;
              <i class="el-icon-view"/>
              &nbsp;浏览({{ item.readingCount }})&nbsp;
            </span>
            <span class="icon-type">&nbsp;{{ item.category }}</span>
          </div>
        </div>
        <nuxt-link
          v-if="item.thumb"
          :to="{name:'article-detail-id',params:{id:item.id}}"
          class="wrap-img"
        >
          <img :src="item.thumb" :onerror="defaultThumb" class="img-blur" alt="120">
        </nuxt-link>
      </li>
    </ul>
    <transition name="fade">
      <el-button v-show="showBtnMore" type="primary" class="btn-more" round @click="getData()">加载更多</el-button>
    </transition>
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
      articleCount: this.count,
      page: 1,
      defaultThumb: "this.src='http://www.linbenjian.work/images/face.jpg'"
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
