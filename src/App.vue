<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
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

</style>
