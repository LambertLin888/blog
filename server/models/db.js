/**
 * @author linbenjian
 * @email linbenjian@tuzhanai.com
 * @create date 2018-11-14 16:56:19
 * @modify date 2018-11-14 16:56:19
 * @desc 封装连接数据库
 */

const mongoose = require("mongoose");
const dbUrl =
  process.env.NODE_ENV == "production"
    ? "mongodb://127.0.0.1/blog-prod-db"
    : "mongodb://127.0.0.1/lambert-db";
// const db = mongoose.createConnection(dbUrl, { useNewUrlParser: true });
const db = mongoose.createConnection(dbUrl);

db.once("open", callback => {
  console.log("数据库连接成功");
});
db.on("error", callback => {
  console.log("数据库连接失败");
});
module.exports = db;
