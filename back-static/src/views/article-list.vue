<template>
  <div class="g-article-list">
    <FilterForm v-on:filter-submit="filterSubmit" />

    <el-row type="flex" justify="center" class="content-blog">
      <el-col :span="18">
        <el-table :data="listData.list" style="width: 100%">
          <el-table-column prop="title" label="标题" width="160">
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="160">
          </el-table-column>

          <el-table-column prop="publish" label="是否公开" width="160">
          </el-table-column>

          <el-table-column prop="category" label="类别" width="160">
          </el-table-column>
          <el-table-column
            prop="des"
            label="概述"
            width="160"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
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
          :current-page="listData.current_page"
          @current-change="getData"
        />
      </el-col>
    </el-row>

    <footer />
  </div>
</template>

<script>
import { getArticleList } from '@/api.js'
// import categoryList from '@/constant/category-list.json'
import { formatDate } from '@/assets/js/utils.js'
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
    console.log('day:' + formatDate())
    this.getData()
  },
  methods: {
    filterSubmit(params) {
      this.listData.current_page = 1
      this.filterRules = params
      this.getData()
    },
    mapCategory(category) {
      if (!category) {
        return ''
      } else return category
    },
    mapCreateTime(time) {
      if (!time) {
        return ''
      }
      time = formatDate('yyyy-MM-dd hh:ss:mm', parseInt(time))
      return time
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
        list.map(item => {
          item.createTime = this.mapCreateTime(item.createTime)
          item.category = this.mapCategory(item.category)
          item.publish = item.publish == '1' ? '是' : '否'
          item.id = item._id
          return item
        })
        this.listData.list = list
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
