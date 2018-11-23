<template>
  <el-row class="g-login">
    <el-col :span="8" :offset="8">
      <h1 class="title">后台管理系统</h1>
      <el-form
        class="form"
        ref="form"
        :model="form"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="用户名:">
          <el-input class="input" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input
            class="input"
            v-model="form.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="btn-submit"
            @click="onSubmit"
            :loading="loading"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
import { login } from '@/api.js'
export default {
  data() {
    return {
      loading: false,
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'change' }]
      }
    }
  },
  computed: {},
  methods: {
    onSubmit() {
      let { username, password } = this.form
      if (username.trim() == '') {
        this.$message({
          message: '请输入用户名',
          type: 'warning'
        })
        return
      }
      if (password.trim() == '') {
        this.$message({
          message: '请输入用户名',
          type: 'warning'
        })
        return
      }
      login(this.form).then(res => {
        let { status, message } = res.data
        this.loading = true
        if (Object.is(status, 0)) {
          const timeout = window.setTimeout(() => {
            this.$router.push({ name: 'article-list' })
            window.clearTimeout(timeout)
          }, 3000)
        } else {
          this.loading = false
          this.$message.error(message)
        }
      })
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/views/login.less';
</style>
