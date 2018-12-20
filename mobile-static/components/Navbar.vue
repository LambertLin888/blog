<template>
  <div class="g-nav">
    <el-row type="flex" class="g-navbar" justify="center">
      <el-col :span="21" :offset="2">
        <nuxt-link :to="{name:'index'}" class="logo">LAMBERT'S BLOG</nuxt-link>
        <el-menu
          :default-active="active"
          class="el-menu-demo tab"
          active-text-color="#23282d"
          text-color="#fff"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="index">
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="IT">
            <span>技术分享</span>
          </el-menu-item>
          <el-menu-item index="life">
            <span>生活点滴</span>
          </el-menu-item>
          <el-menu-item index="about">
            <span>关于</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      menuRouter: {
        index: '/',
        IT: '/article-list/IT',
        life: '/article-list/life',
        about: '/about'
      }
    }
  },
  methods: {
    handleSelect(key) {
      this.$router.push({ path: this.menuRouter[key] })
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/components/navbar.less';
</style>
