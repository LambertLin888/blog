<template>
  <div class="g-detail">
    <el-row>
      <el-col :span="10" :offset="7">
        <h1 class="title">
          <span>{{ detail.title }}</span>
        </h1>
        <el-row class="tips">
          <el-col>
            <div class="meta">
              <span
                >&nbsp;<i class="el-icon-date" />&nbsp;{{
                  detail.createTime
                }}</span
              >
              <span
                >&nbsp;<i class="el-icon-view" />&nbsp;浏览({{
                  detail.readingCount
                }})&nbsp;</span
              >
              <span class="icon-type">&nbsp;{{ detail.category }}</span>
            </div>
          </el-col>
        </el-row>
        <div class="html-content" v-html="detail.originalContent" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getArticleDetail } from '@/api.js'
import { formatArticleContent } from '@/assets/js/utils.js'
export default {
  data() {
    return {
      detail: {
        title: '',
        createTime: '',
        readingCount: 1,
        originalContent: '',
        category: ''
      }
    }
  },
  mounted() {
    let id = this.$route.params.id
    getArticleDetail({
      params: { id }
    }).then(result => {
      if (result.data.status == 0) {
        let params = result.data.data
        this.detail = formatArticleContent(params)
      }
    })
  }
}
</script>
<style lang="less">
@import '../assets/css/views/detail.less';
</style>
