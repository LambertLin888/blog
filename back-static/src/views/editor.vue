<template>
  <div class="g-editor">
    <el-Row>
      <el-col :span="8">
        <div class="demo-input-suffix">
          <span>标题</span>
          <el-input
            placeholder="请输入文章标题"
            maxlength="20"
            v-model="detail.title"
            class="input-title"
          >
          </el-input>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="demo-input-suffix">
          类别
          <el-cascader
            :options="categeryList"
            v-model="detail.categery"
            @change="changeCategory"
            :change-on-select="true"
          ></el-cascader>
        </div>
      </el-col>
      <el-col :span="11">
        是否公开 &nbsp;
        <el-radio v-model="detail.publish" label="1">是</el-radio>
        <el-radio v-model="detail.publish" label="0">否</el-radio>
      </el-col>
      <el-col :span="24">
        <div class="demo-input-suffix">
          <span>简介</span>
          <el-input
            class="input-des"
            placeholder="请输入文章简介"
            v-model="detail.des"
          >
          </el-input>
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
    <el-col :span="2" :offset="22">
      <el-button span="1" push="23" class="btn-submit" @click="submitArticle">
        发布文章
      </el-button>
    </el-col>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import { insertArticle } from '@/api.js'
import { clone } from '@/assets/js/util.js'
import categeryList from '@/constant/category-list.json'
export default {
  components: {
    mavonEditor
  },
  data() {
    return {
      categeryList,
      detail: {
        title: '',
        content: '',
        originalContent: '',
        createTime: FormatDate(new Date()),
        des: '',
        publish: '1',
        categery: []
      }
    }
  },
  methods: {
    changeContent(value, render) {
      this.detail.originalContent = render
      this.detail.content = value
    },
    changeCategory(value) {
      console.log(value)
      this.detail.categery = value
    },
    submitArticle() {
      if (this.detail.title == '') {
        this.$message({ message: '请输入文章标题', type: 'warning' })
        return
      }
      if (
        this.detail.original === '0' &&
        this.detail.originalUrl.trim() == ''
      ) {
        this.$message({ message: '请输入原文链接', type: 'warning' })
        return
      }
      let params = clone(this.detail)
      params.categery = params.categery.toString()
      insertArticle(params).then(res => {
        let { status } = res.data
        if (Object.is(status, 0)) {
          this.$message({
            message: '发布成功',
            type: 'success'
          })
        } else {
          this.$message.error('发布失败')
        }
      })
    }
  }
}
/*封装格式化日期*/
function FormatDate(strTime) {
  var date = new Date(strTime)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}
</script>
<style lang="less" scoped>
@import '../assets/css/views/editor.less';
</style>
