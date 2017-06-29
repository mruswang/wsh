<template>
  <div>
    <el-form :model="ruleForm2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="name">
        <el-input v-model="ruleForm2.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="创建时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm2.date1" style="width: 100%;" auto-complete="off"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm2.date2" style="width: 100%;" auto-complete="off"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="文章内容" prop="desc">
        <el-input type="textarea" v-model="ruleForm2.desc" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        ruleForm2: {
          name: '',
          date1: '',
          date2: '',
          desc: ''
        }
      }
    },
    methods: {
      submitForm (ruleForm2) {
        this.$refs[ruleForm2].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm2)
            this.axios.post('/api/login/save', {
              name: this.ruleForm2.name,
              date1: this.ruleForm2.date1,
              date2: this.ruleForm2.date2,
              desc: this.ruleForm2.desc
            })
              .then(function (response) {
                console.log(response)
              })
              .catch(function (error) {
                console.log(error)
              })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style>

</style>
