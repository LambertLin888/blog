<template>
  <div class="g-tabbar">
    <mt-tabbar :fixed="true" v-model="active">
      <mt-tab-item id="index">
        <i class="g-iconfont icon-home"/>
        <div class="name">首页</div>
      </mt-tab-item>
      <mt-tab-item id="readingCount">
        <i class="g-iconfont icon-fire"/>
        <div class="name">热门</div>
      </mt-tab-item>
      <mt-tab-item id="createTime">
        <i class="g-iconfont icon-time-circle"/>
        <div class="name">最新</div>
      </mt-tab-item>
      <mt-tab-item id="about">
        <i class="g-iconfont icon-smile"/>
        <div class="name">我</div>
      </mt-tab-item>
    </mt-tabbar>
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
        createTime: '/article-list/createTime',
        readingCount: '/article-list/readingCount',
        about: '/about'
      }
    }
  },
  watch: {
    active: function(val) {
      this.handleSelect(val)
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
@import '../assets/css/components/tabbar.less';
</style>
