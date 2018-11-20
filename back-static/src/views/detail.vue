<template>
  <div class="g-detail">
    <el-row type="flex" justify="center">
      <el-col :span="14" class="detail_title">
        <div>{{ detail.title }}</div>
        <div class="time">
          发布时间：{{ detail.time }}&nbsp;&nbsp;&nbsp;&nbsp;分类：{{
            detail.category === '' ? '前端文章' : '后端文章'
          }}
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="14" class="detail_content">
        <el-card>
          <div v-show="!detail.content">暂无文章数据...</div>
          <div class="md markdown-body" v-html="detail.originalContent" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getArticleDetail } from '@/api.js'
export default {
  data() {
    return {
      active: 'article-list',
      detail: {
        title: '',
        time: '',
        type: '',
        content: ''
      },
      error: {}
    }
  },
  beforeRouteEnter(to, from, next) {
    getArticleDetail({ params: { id: to.params.id } }).then(result => {
      let { error, info } = result.data
      next(vm => {
        vm.detail = info[0]
        vm.error = error
      })
      next()
    })
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/views/detail.less';
</style>
