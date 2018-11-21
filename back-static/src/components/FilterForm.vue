<template>
  <div class="g-filter-form">
    <el-form
      :inline="true"
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="标题:" prop="title">
        <el-input
          v-model="ruleForm.title"
          placeholder="请输入文章标题"
        ></el-input>
      </el-form-item>
      <el-form-item label="类别:" prop="category">
        <el-cascader
          placeholder="请选择文章类别"
          :options="categoryList"
          v-model="ruleForm.category"
          :change-on-select="true"
        ></el-cascader>
      </el-form-item>

      <el-form-item label="日期:" prop="time">
        <el-date-picker
          v-model="ruleForm.time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="公开:" prop="publish">
        <el-radio-group v-model="ruleForm.publish">
          <el-radio :label="0">全部</el-radio>
          <el-radio :label="1">公开</el-radio>
          <el-radio :label="2">不公开</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="排序:" prop="sort">
        <el-radio-group v-model="ruleForm.sort">
          <el-radio :label="0">正序</el-radio>
          <el-radio :label="1">倒序</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item class="btn-list">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >查询</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import categoryList from '@/constant/category-list.json'
import { clone } from '@/assets/js/utils.js'
export default {
  data() {
    return {
      categoryList,
      ruleForm: {
        title: '',
        category: [],
        time: [],
        publish: 0,
        sort: 0
      }
    }
  },
  methods: {
    submitForm() {
      let rules = clone(this.ruleForm)
      let params = {}
      params.title = rules.title
      params.category = rules.category.join('/')
      params.start_time = rules.time[0] ? rules.time[0].valueOf() : ''
      params.end_time = rules.time[0] ? rules.time[1].valueOf() : ''
      params.publish = rules.publish
      params.sort = rules.sort
      this.$emit('filter-submit', params)
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/components/filter-form.less';
</style>
