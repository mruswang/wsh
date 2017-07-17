<template>
  <div>
    <el-upload
      class="upload-demo"
      action="/api/upload/save"
      :file-list="fileList2"
      :on-success="success"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <button @click="get">get</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        fileList2: []
      }
    },
    methods: {
      success (response, file, fileList) {
        console.log(fileList)
        this.fileList2.name = fileList[0].name
        this.fileList2.url = fileList[0].url
      },
      get () {
        console.log(this.fileList2)
      }
    }
  }
</script>

<style>

</style>
