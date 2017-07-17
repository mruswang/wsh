<template>
  <el-carousel :interval="4000" type="card">
    <el-carousel-item v-for="item in banner" :key="item">
      <h3><img :src="item.url" alt=""></h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        banner: [
          {
            title: '第一张',
            url: require(`@/assets/banner1.jpg`)
          },
          {
            title: '第一张',
            url: require(`@/assets/banner2.jpg`)
          },
          {
            title: '第一张',
            url: require(`@/assets/banner3.jpg`)
          }
        ]
      }
    }
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    /*line-height: 200px;*/
    margin: 0;
  }
  .el-carousel__item>h3>img{
    width: 100%;
    height: auto;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
