const userModel = require("../models/userSchema");
const md5 = require("../lib/md5");

/**
 *Private API
 *@method login
 *@param {String|null} username POST
 *@param {String|null} password POST
 *@return {session,info}
 */
let login = async ctx => {
  try {
    let params = ctx.request.body;
    let { username, password } = params;
    let pwd = md5(password);
    let result = await userModel.findOne({ username });
    if (result.password === pwd) {
      delete result.password;
      ctx.session.userInfo = result;
      ctx.body = {
        status: 0,
        data: ctx.session.result
      };
    } else {
      ctx.body = {
        status: 1,
        message: "用户名或密码错误"
      };
    }
  } catch (e) {
    ctx.body = {
      error: 1,
      info: e
    };
  }
};
let registered = async ctx => {
  try {
    let params = ctx.request.query;
    let result = await userModel.insertMany(params);
    if (result.length > 0) {
      ctx.body = {
        error: 0,
        msg: "注册成功"
      };
    } else {
      ctx.body = {
        msg: "注册失败"
      };
    }
  } catch (e) {
    ctx.body = {
      error: 1,
      info: e
    };
  }
};
let logout = async ctx => {
  try {
    ctx.session.userInfo = null;
    ctx.body = {
      status: 0,
      message: "退出成功"
    };
  } catch (e) {
    ctx.body = {
      status: 1,
      message: "退出失败"
    };
  }
};
module.exports = {
  logout,
  login,
  registered
};
