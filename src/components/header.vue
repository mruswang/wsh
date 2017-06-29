<template>
  <div class="header">
    <el-row>
      <el-col :xs="24" >
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"  :router="true">
          <el-menu-item index="1"><a href=""><img src="../assets/logo.png"  alt=""></a></el-menu-item>
          <el-menu-item index="/index">首页</el-menu-item>
          <el-menu-item index="/web">前端</el-menu-item>
          <el-menu-item index="/page">单页</el-menu-item>
          <el-menu-item index="/user">用户</el-menu-item>
        </el-menu>
      </el-col>

    </el-row>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
