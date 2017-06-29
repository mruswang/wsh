<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total"
     >
    </el-pagination>
  </div>
</template>

<script>
  export default {
    props: {
      total: {
        type: Number
      }
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        this.$emit('mypage', val)
      }
    },
    data () {
      return {
        currentPage1: 1
      }
    }
  }
</script>

<style scoped>

</style>
