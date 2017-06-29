<template>
  <div class="content">
    <lunbo></lunbo>
    <el-row>
      <el-col :xs="24" :sm="16">
        <div class="grid-content bg-purple">
          <h3>特别推荐</h3>
          <el-row class="media" v-for="item in filteredItems">
            <el-col :xs="10" :sm="7"  class="media-left">
              <div class="grid-content bg-purple">
                <a class="media-left" :href="'/details/' + item._id ">
                  <img class="img-rounded" :src="text_img" width="100%" alt="">
                </a>
              </div>
            </el-col>
            <el-col :xs="14" :sm="17">
              <div class="grid-content bg-purple-light media-body">
                <a :href="'/details/' + item._id "><h4>{{item.name}}</h4></a>
                <p>{{item.desc}}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" class="tetx_right">
        <div class="grid-content bg-purple-light">
          <h3>热门文章</h3>
          <ul>
            <li><a href="">道都搞不定吗？其实手机</a></li>
            <li><a href="">道都搞不定吗？其实手机</a></li>
            <li><a href="">道都搞不定吗？其实手机</a></li>
            <li><a href="">道都搞不定吗？其实手机</a></li>
            <li><a href="">道都搞不定吗？其实手机</a></li>
          </ul>
          <h3>最新推荐</h3>
          <ul>
            <li><a href="">道都搞不定吗？其实手机</a></li>
            <li><a href="">道都搞不定吗？其实手机</a></li>
            <li><a href="">道都搞不定吗？其实手机</a></li>
            <li><a href="">道都搞不定吗？其实手机</a></li>
            <li><a href="">道都搞不定吗？其实手机</a></li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <page class="page" :total="data.length" @mypage="get"></page>
  </div>
</template>

<script type="text/ecmascript-6">
import lunbo from '@/components/lunbo'
import page from '@/components/page'
export default {
  data () {
    return {
      data: '',
      text_img: require('@/assets/recom2.jpg'),
      dataId: 123,
      page_index: ''
    }
  },
  created () {
    this.axios.get('/api/login/find').then((response) => {
      let data = response.data
      this.data = data
    })
  },
  components: {
    lunbo, page
  },
  computed: {
    filteredItems: function () {
      if (this.page_index === 1 || this.page_index === '') {
        return this.data.slice(0, 10)
      } else {
        return this.data.slice((this.page_index - 1) * 10, this.page_index * 10)
      }
    }
  },
  methods: {
    get (val) {
      // console.log(val)
      this.page_index = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    /*width: 1200px;*/
    margin: auto;
  }

  h3{
    background-color: #F7F7F7;
    height: 30px;
    line-height: 30px;
    margin-bottom: 0;
    padding:10px 20px;
  }
  .media{
    background-color: white;
    padding-left: 0;
    margin-top: 0;
    border-left: 1px solid #F1F1F1;
    border-top: 1px solid #F1F1F1;
    border-right: 1px solid #F1F1F1;
  }
  .media:last-child{
    border-bottom: 1px solid #F1F1F1;
  }
   .media-left{
    padding: 15px;
     display: inline-block;
  }
  .media-body h4{
    height: 25px;
    line-height: 25px;
    font-size: 20px;
    overflow: hidden;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .media:hover{
    background-color: #FAFFF8;
  }
  .media:hover .media-body h4{
    color: #53AE30;
  }
  .media-body p{
    margin-bottom: 10px;
    line-height: 20px;
    cursor: pointer;
    color: #999999;
    padding-right: 10px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:4;
  }
  .media-body a{color: #555555;text-decoration: none;}
  .tetx_right div{
    margin-left: 20px;
  }
  .tetx_right ul{
    list-style-type:none;
    padding-left: 20px;
    margin-left: 8px;
  }
  .tetx_right a{
    color: #999999;
    text-decoration: none;
    display: inline-block;
    padding: 3px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .page{
    text-align: center;
    margin-top: 20px;
  }
</style>
