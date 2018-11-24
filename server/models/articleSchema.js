/**
 * @author linbenjian
 * @email linbenjian@tuzhanai.com
 * @create date 2018-11-14 16:48:01
 * @modify date 2018-11-14 16:48:01
 * @desc 文章model
 */
const mongoose = require("mongoose");
const db = require("./db");

let articleSchema = new mongoose.Schema({
  id: String, //同_id
  title: String, //文章标题
  originalContent: String, //html内容
  content: String, //内容
  createTime: Number, //创建时间
  des: String, //文章简介
  publish: String, //是否公开
  category: String, //类别
  keys: String, //<head>的key
  readingCount: Number, //阅读数
  thumb: String
});

let articleModel = db.model("Article", articleSchema);

module.exports = articleModel;
