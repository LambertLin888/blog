<template>
  <div class="g-nav">
    <el-row type="flex" class="g-navbar" justify="center">
      <el-col :span="20">
        <a href="http://localhost:8000/" class="logo">文章管理后台</a>
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
    </el-row>
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
    return {}
  },
  methods: {
    handleSelect(key) {
      let params = {}
      if (key == 'editor') {
        params.id = '0'
      }
      this.$router.push({ name: key, params })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/components/navbar.less';
</style>
