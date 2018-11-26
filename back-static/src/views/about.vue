<template>
  <div class="g-article-list">
    <FilterForm v-on:filter-submit="filterSubmit" />
    <el-row type="flex" justify="center" class="content-blog">
      <el-col :span="20">
        <el-table :data="listData.list">
          <el-table-column
            prop="title"
            header-align="center"
            label="标题"
            width="220"
          >
          </el-table-column>
          <el-table-column
            prop="createTime"
            align="center"
            label="创建时间"
            width="160"
          >
          </el-table-column>
          <el-table-column
            prop="readingCount"
            align="center"
            label="阅读数"
            width="100"
          >
          </el-table-column>

          <el-table-column
            prop="publish"
            align="center"
            label="是否公开"
            width="110"
          >
          </el-table-column>

          <el-table-column
            prop="category"
            align="center"
            label="类别"
            width="190"
          >
          </el-table-column>
          <el-table-column
            prop="des"
            header-align="center"
            label="概述"
            width="200"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="100"
          >
            <template slot-scope="scope">
              <el-button
                @click="goDetailHandle(scope.row.id)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button
                @click="editorHandle(scope.row.id)"
                type="text"
                size="small"
                >编辑</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-Pagination
          :page-size="9"
          :total="listData.count"
          class="pagination"
          background
          layout="prev, pager, next"
          :current-page.sync="listData.current_page"
          @current-change="getData"
        />
      </el-col>
    </el-row>

    <footer />
  </div>
</template>

<script>
import { getArticleList } from '@/api.js'
import { formatArticleContent } from '@/assets/js/utils.js'
import FilterForm from '@/components/FilterForm.vue'
export default {
  components: { FilterForm },
  data() {
    return {
      active: 'article-list',
      listData: {
        list: [],
        count: 0,
        current_page: 0
      },
      filterRules: {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    filterSubmit(params) {
      this.listData.current_page = 0
      this.filterRules = params
      this.getData()
    },
    getData(page = 1) {
      getArticleList({
        params: {
          page,
          pagesize: 7,
          ...this.filterRules
        }
      }).then(res => {
        let { count, list } = res.data
        this.listData.list = formatArticleContent(list)
        this.listData.count = count
      })
    },
    goDetailHandle(id) {
      this.$router.push({ name: 'detail', params: { id } })
    },
    editorHandle(id) {
      this.$router.push({ name: 'editor', params: { id } })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/views/article-list.less';
</style>
