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
  content: String, //文章内容
  originalContent: String, //html内容
  createTime: Number, //创建时间
  des: String, //文章简介
  publish: String, //是否公开
  category: String //类别
});

let articleModel = db.model("Article", articleSchema);

module.exports = articleModel;
