/**
 * @author linbenjian
 * @email linbenjian@tuzhanai.com
 * @create date 2018-11-14 16:48:01
 * @modify date 2018-11-14 16:48:01
 * @desc 文章model
 */
const mongoose = require('mongoose')
const db = require('./db')

let articleSchema = new mongoose.Schema({
  title: String,
  time: String,
  content: String,
  original: String,
  des: String,
  list: String,
  banner: String,
  imgFileName: String
})

let articleModel = db.model('Article', articleSchema)

module.exports = articleModel
