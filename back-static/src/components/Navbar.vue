<template>
  <div class="g-nav">
    <el-row type="flex" class="g-navbar" justify="center">
      <el-col :span="6" :offset="3">
        <a href="/" class="logo">博客管理后台</a>
      </el-col>
      <el-col :span="13">
        <el-menu
          :default-active="active"
          class="el-menu-demo tab"
          active-text-color="#23282d"
          text-color="#fff"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="article-list"
            ><span>我的博文</span></el-menu-item
          >
          <el-menu-item index="editor"><span>写文章</span></el-menu-item>
          <el-menu-item index="about"><span>简介</span></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="1">
        <el-button class="btn-logout" size="mini" round @click="goLogout"
          >登出</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { logout } from '@/api.js'
export default {
  props: {
    active: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleSelect(key) {
      let params = {}
      switch (key) {
        case 'editor':
          params.id = '0'
          break
      }
      this.$router.push({ name: key, params })
    },
    goLogout() {
      logout().then(res => {
        let { status, message } = res.data
        if (Object.is(status, 0)) {
          const timeout = window.setTimeout(() => {
            this.$router.push({ name: 'login' })
            window.clearTimeout(timeout)
          }, 3000)
          this.$message({
            message,
            type: 'success'
          })
        } else {
          this.$message.error(message)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/components/navbar.less';
</style>
