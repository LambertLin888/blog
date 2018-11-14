/**
 * @author linbenjian
 * @email linbenjian@tuzhanai.com
 * @create date 2018-11-14 16:56:19
 * @modify date 2018-11-14 16:56:19
 * @desc 封装连接数据库
 */
const mongoose = require('mongoose')
const db = mongoose.createConnection('mongodb://127.0.0.1/lambert-db')

db.once('open', callback => {
  console.log('数据库连接成功')
})
db.on('error', callback => {
  console.log('数据库连接失败')
})
module.exports = db
