/**
 * @author linbenjian
 * @email linbenjian@tuzhanai.com
 * @create date 2018-11-14 16:55:09
 * @modify date 2018-11-14 16:55:09
 * @desc 文章接口
 */

const article = require("../models/articleSchema");
/**
 * private API
 * @method insert
 * @param {object} 接收发布文章接口传递对象值
 * @return {object|null}  insert article
 */

let insertArticle = async ctx => {
  try {
    const query = ctx.request.body;
    let result = {};
    if (query.id) {
      result = await article.updateOne({ _id: query.id }, query, {
        upsert: true
      });
      if (result.n == 1) {
        ctx.body = {
          status: 0,
          message: "更新成功"
        };
      } else {
        ctx.body = {
          status: 1,
          message: "发布成功"
        };
      }
      return;
    } else {
      result = await article.insertMany(query);
      if (result.length > 0) {
        result[0].id = result[0]._id;
        ctx.body = {
          status: 0,
          message: "已发布",
          data: result[0]
        };
        return;
      }
    }
  } catch (e) {
    ctx.body = {
      status: 1,
      message: e.message
    };
  }
};

/**
 *public API
 *@param {number|null} page
 *@param {number|null} pagesize
 *@return {object} return article list 按时间排序
 */

let getArticleList = async ctx => {
  try {
    let req = ctx.request.query;
    let { page, pagesize } = req;
    delete req.page;
    delete req.pagesize;
    let conditions = {};
    let sort = {};
    if (Object.keys(req).length > 0) {
      sort = { createTime: req.sort };
      delete req.sort;
      //   let conditionsKey = "";
      const keys = Object.keys(req);
      keys.forEach(key => {
        value = req[key];
        if (value) {
          switch (key) {
            case "category":
            case "title":
              value = new RegExp(value, "i");
              break;
            case "start_time":
              key = "createTime";
              value = { $gte: req.start_time, $lte: req.end_time };
              delete req.end_time;
              break;
          }
          conditions[key] = value;
        }
      });
    }

    page = parseInt((page - 1) * pagesize);
    pagesize = parseInt(pagesize);
    let list = await article
      .find(conditions, { __v: 0, content: 0, original: 0, list: 0 })
      .skip(page)
      .limit(pagesize)
      .sort(sort);
    let count = await article.count(conditions);
    ctx.body = {
      error: 0,
      count,
      list
    };
  } catch (e) {
    ctx.body = {
      error: 1,
      info: e
    };
  }
};
/**
 *public API
 *@param {String} id find Article Detail
 *@return {object|null} return Article Detail
 */

let getArticleDetail = async ctx => {
  try {
    let req = ctx.request.query;
    let { id } = req;
    let result = await article.findOne({ _id: id });
    result.id = result._id;
    ctx.body = {
      status: 0,
      data: result
    };
  } catch (e) {
    ctx.body = {
      error: 1,
      error: ""
    };
  }
};
/**
 *public API
 *@param {String} id delete Article
 *@return {object|null} return status
 */

let deleteArticle = async ctx => {
  try {
    let req = ctx.request.body;
    let { id } = req;
    let result = await article.deleteOne({ _id: id });
    if (result.n == 1) {
      ctx.body = {
        status: 0,
        message: "删除成功"
      };
    } else {
      ctx.body = {
        error: 1,
        error: "删除失败"
      };
    }
  } catch (e) {
    ctx.body = {
      error: 1,
      error: "删除失败"
    };
  }
};

module.exports = {
  insertArticle,
  getArticleList,
  getArticleDetail,
  deleteArticle
};
