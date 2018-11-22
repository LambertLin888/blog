<template>
  <div class="g-detail">
    <el-row type="flex" justify="center">
      <el-col :span="14">
        <h1 class="title">
          <span>{{ title }}</span>
        </h1>
        <div class="sub-title">
          <img
            class="face"
            src="https://upload.jianshu.io/users/upload_avatars/8679037/eaf94c11-90a4-4494-bcb2-155f7eb620d4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
          />
          <div class="tips">
            <p class="name">linbenjian</p>
            <p class="time">
              2018.10.11 14:57* 字数 668 阅读 3443评论 40喜欢 61
            </p>
          </div>
        </div>
        <div class="md markdown-body" v-html="detail.originalContent" />
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
