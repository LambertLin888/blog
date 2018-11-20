<template>
  <div class="g-article-list">
    <FilterForm />
    <el-row type="flex" justify="center" class="content-blog">
      <el-col :span="13">
        <router-link
          v-for="item in list"
          :key="item._id"
          :to="{ name: 'detail', params: { id: item._id } }"
          class="item-box"
        >
          <el-card class="card">
            <p class="title">{{ item.title }}</p>
            <div class="time">
              <span><i class="el-icon-date" />&nbsp;{{ item.createTime }}</span>
              <span><i class="el-icon-view"></i>&nbsp;{{ item.times }}</span>
            </div>
            <div class="des">{{ item.des }}</div>
          </el-card>
        </router-link>
        <el-Pagination
          :page-size="5"
          :total="count"
          class="pagination"
          background
          layout="prev, pager, next"
          @current-change="getData"
        />
      </el-col>
    </el-row>
    <footer />
  </div>
</template>

<script>
import { getArticleList } from '@/api.js'
import FilterForm from '@/components/FilterForm.vue'
export default {
  components: { FilterForm },
  data() {
    return {
      active: 'article-list',
      list: [],
      count: 0
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData(page = 1) {
      let json = { page, pagesize: 5 }
      getArticleList({ params: json }).then(res => {
        let { count, list } = res.data
        this.list = list
        this.count = count
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/views/article-list-copy.less';
</style>
