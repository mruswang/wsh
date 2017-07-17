<template>
  <div id="app" class="container">
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from '@/components/header'
import MFooter from '@/components/footer'
export default {
  components: {
    MHeader, MFooter
  }
}
</script>

<style>
  .container{
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1200px) {
    .container {
      width: 1200px;
    }
  }

  @media (min-width: 768px) and (max-width: 1199px){
    .container {
      width: 970px;
    }
  }
  @media (min-width: 455px) and (max-width: 767px){
    .container {
      width: 750px;
    }
  }
</style>
