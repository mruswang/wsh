<template>
  <div>
    <div class="details">
      <div>{{data.desc}}</div>
      <p>{{$route.params.id}}</p>
      <p>上一篇</p>
      <p>下一篇</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      data: ''
    }
  },
  created () {
    let _id = this.$route.params.id
    console.log(_id)
    this.axios.get('/api/login/find_id', {
      params: {
        id: _id
      }
    }).then((response) => {
      let data = response.data.users[0]
      this.data = data
      console.log(data)
    })
  }
}
</script>

<style>
  .details>p{
    text-indent: 30px;
  }
  .details>h3{
    color: red;
  }
  .details>.p{
    color: mediumseagreen;
  }
</style>
