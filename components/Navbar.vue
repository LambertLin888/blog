<template>
  <div>
    <div class="nav">
      <el-row
        type="flex"
        class="navbar"
        justify="center">
        <el-col :span="20">
          <nuxt-link
            :to="{name:'index'}"
            class="logo">lambert</nuxt-link>
          <el-menu
            :default-active="active"
            class="el-menu-demo tab"
            active-text-color="#23282d"
            text-color="#fff"
            mode="horizontal"
            @select="handleSelect">
            <el-menu-item index="index">
            <span>前端文章</span></el-menu-item>
            <el-menu-item index="Backarticle"><span>后端文章</span></el-menu-item>
            <el-menu-item index="version"><span>更新日志</span></el-menu-item>
            <el-menu-item index="about"><span>关于我</span></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: 'index'
    }
  },
  data() {
    return {
      activeIndex: 'index'
    }
  },
  methods: {
    handleSelect(key) {
      this.$router.push({ name: key })
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/common/navbar.less';
</style>
