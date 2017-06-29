/**
 * Created by wangsir on 2017/6/27.
 */
// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/save',(req,res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  let newAccount = new models.Login({
    name : req.body.name,
    date1 : req.body.date1,
    date2 : req.body.date2,
    desc : req.body.desc
  });
  // 保存数据newAccount数据进mongoDB
  newAccount.save((err,data) => {
    if (err) {
      res.send(err);
    } else {
      res.send('createAccount successed');
    }
  });
});

// 获取已有账号接口
router.get('/api/login/find',(req,res) => {
  //console.log(req.body._id);
  // 通过模型去查找数据库
  models.Login.find((err,data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.get('/api/login/find_id',function (req,res,next) {
  models.Login.find().where("_id").equals(req.query.id).exec(function (err,users) {
    //console.log(req.query.id);
    var data={
      users:users.map(function (user) {
        return {
          _id:user._id,
          name : user.name,
          date1 : user.date1,
          date2 : user.date2,
          desc : user.desc
        };
      })
    };
    //console.log(data);
    res.send(data);
  });
});
module.exports = router;
