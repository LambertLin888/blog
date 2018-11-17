<template>
  <div class="hello">
    <el-button>hello vue</el-button>
    <mavon-editor
      @change="changeContent"
      class="article_content"
      v-model="content"
      fontSize="18px"
      placeholder="开始编写文章内容..."
      style="min-height:600px;"
    />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
