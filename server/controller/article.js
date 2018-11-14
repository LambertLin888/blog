/**
 * @author linbenjian
 * @email linbenjian@tuzhanai.com
 * @create date 2018-11-14 16:55:09
 * @modify date 2018-11-14 16:55:09
 * @desc 文章接口
 */

const article = require('../models/articleSchema')
/**
 * private API
 * @method insert
 * @param {object} 接收发布文章接口传递对象值
 * @return {object|null}  insert Front article
 */

let insertArticle = async ctx => {
  try {
    let req = ctx.request.body
    let { title, htmlContent, date, des, original, radio } = req
    console.log(req)
    const front = await article.update(
      { title },
      {
        $set: {
          title,
          content: htmlContent,
          time: date,
          des,
          original,
          list: radio
        }
      },
      { upsert: true }
    )
    let { ok } = front
    ctx.body = {
      error: 0,
      success: ok
    }
  } catch (e) {
    ctx.body = {
      error: 1,
      info: e
    }
  }
}

/**
 *public API
 *@param {number|null} page
 *@param {number|null} pagesize
 *@return {object} return article list 按时间排序
 */

let getArticle = async (ctx, next) => {
  try {
    let req = ctx.request.query
    let { parseInt } = Number
    let page = parseInt((req.page - 1) * req.pagesize)
    let pagesize = parseInt(req.pagesize)
    console.log(page)
    let list = await article
      .find({}, { __v: 0, content: 0, original: 0, list: 0 })
      .skip(page)
      .limit(pagesize)
      .sort({ _id: -1 })
    let count = await article.count({})
    ctx.body = {
      error: 0,
      count,
      list
    }
  } catch (e) {
    ctx.body = {
      error: 1,
      info: e
    }
  }
}
/**
 *public API
 *@param {String} id find Article Detail
 *@return {object|null} return Article Detail
 */

let articleInfo = async (ctx, next) => {
  try {
    let req = ctx.request.query
    let { id } = req
    let result = await article.find({ _id: id })
    ctx.body = {
      error: 0,
      info: result
    }
  } catch (e) {
    ctx.body = {
      error: 1,
      error: e
    }
  }
}

module.exports = {
  insertArticle,
  getArticle,
  articleInfo
}
