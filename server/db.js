/**
 * Created by wangsir on 2017/6/27.
 */
// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/vue');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
  name: String,
  date1: Date,
  date2: Date,
  desc: String,
  imgname:String,
  imgurl: String
});

const uploadSchema = mongoose.Schema({
  name: String,
  url: String,
  fileList2: Object
});

/************** 定义模型Model **************/
const Models = {
  Login : mongoose.model('Login',loginSchema),
  Upload : mongoose.model('Upload',uploadSchema)
}

module.exports = Models;
