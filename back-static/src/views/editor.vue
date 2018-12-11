<template>
  <div class="g-editor">
    <el-Row>
      <el-col :span="8">
        <div class="demo-input-suffix">
          <span>标题</span>
          <el-input
            placeholder="请输入文章标题"
            maxlength="40"
            v-model="detail.title"
            class="input-title"
          ></el-input>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="demo-input-suffix">
          类别
          <el-cascader
            :options="categoryList"
            v-model="detail.category"
            :change-on-select="true"
          ></el-cascader>
        </div>
      </el-col>
      <el-col :span="8"
        >是否公开 &nbsp;
        <el-radio v-model="detail.publish" label="1">是</el-radio>
        <el-radio v-model="detail.publish" label="0">否</el-radio>
      </el-col>
      <el-col :span="3">
        <el-button
          span="1"
          type="primary"
          @click="
            showConfirm('此操作将会覆盖原来的内容，是否继续？', submitHandle)
          "
          >发布</el-button
        >
        <el-button
          v-if="!initArticle"
          span="1"
          type="primary"
          @click="
            showConfirm('此操作将会永久删除当前文章，是否继续？', deleteHandle)
          "
          >删除</el-button
        >
      </el-col>
      <el-col :span="13">
        <div class="demo-input-suffix">
          <span>简介</span>
          <el-input
            class="input-des"
            placeholder="请输入文章description(for SEO)"
            v-model="detail.des"
          ></el-input>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="demo-input-suffix">
          <span>关键字</span>
          <el-input
            class="input-des"
            placeholder="请输入文章keywords(用半角逗号隔开)"
            v-model="detail.keywords"
          ></el-input>
        </div>
      </el-col>
    </el-Row>
    <mavon-editor
      @change="changeContent"
      class="article_content"
      v-model="detail.content"
      fontSize="18px"
      placeholder="开始编写文章内容..."
      style="min-height:600px;"
    />
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import { insertArticle, getArticleDetail, deleteArticle } from '@/api.js'
import { clone } from '@/assets/js/utils.js'
import categoryList from '@/constant/category-list.json'
export default {
  components: {
    mavonEditor
  },
  data() {
    return {
      initArticle: true,
      categoryList,
      detail: {
        title: '',
        content: '',
        originalContent: '',
        des: '',
        publish: '1',
        category: ['IT'],
        id: '',
        keywords: '',
        createTime: 0
      }
    }
  },
  mounted() {
    let id = this.$route.params.id
    if (id == '0') {
      this.detail.id = ''
      return
    }
    this.initArticle = false
    this.detail.id = id
    this.getArticle(id)
  },
  methods: {
    changeContent(value, render) {
      this.detail.originalContent = render
    },
    submitHandle() {
      if (this.detail.title == '') {
        this.$message({ message: '请输入文章标题', type: 'warning' })
        return
      }
      let params = clone(this.detail)
      params.category = params.category.toString()
      if (!params.createTime) {
        params.createTime = new Date().valueOf()
      }
      insertArticle(params).then(res => {
        let { status, data, message } = res.data
        if (data) {
          this.$router.push({ name: 'editor', params: { id: data.id } })
          this.detail.id = data.id
          this.initArticle = false
        }
        if (Object.is(status, 0)) {
          this.$message({
            message,
            type: 'success'
          })
        } else {
          this.$message.error(message)
        }
      })
    },
    deleteHandle() {
      deleteArticle({ id: this.detail.id }).then(res => {
        let { status, message } = res.data
        if (Object.is(status, 0)) {
          this.$message({
            message,
            type: 'success'
          })
          const timeout = window.setTimeout(() => {
            this.$router.push({ name: 'article-list' })
            window.clearTimeout(timeout)
          }, 3000)
        } else {
          this.$message.error(message)
        }
      })
    },
    getArticle(id) {
      getArticleDetail({
        params: { id }
      }).then(result => {
        if (result.data.status == 0) {
          let params = result.data.data
          params.category = params.category.split(',')
          this.detail = params
        }
      })
    },
    showConfirm(msg, cb) {
      if (this.initArticle) {
        cb()
        return
      }
      this.$confirm(msg, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        cb()
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/views/editor.less';
</style>
