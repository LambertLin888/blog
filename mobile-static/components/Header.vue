

<template>
  <div class="g-header">
    <mt-header :title="title" fixed>
      <mt-button slot="left" icon="back" @click="handleBack">{{ toName }}</mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'lambert’blog'
    },
    path: {
      type: String,
      default: ''
    },
    toName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    handleBack() {
      if (this.path) {
        this.$router.push({ path: this.path })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/components/header.less';
</style>
