/**
 * @author linbenjian
 * @email linbenjian@tuzhanai.com
 * @create date 2018-11-14 16:47:13
 * @modify date 2018-11-14 16:47:13
 * @desc 服务端路由
 */
const router = require("koa-router")();
const article = require("../controller/article");
const user = require("../controller/user");

router.prefix("/api");
/*添加文章接口*/
router.post("/article/insertArticle", article.insertArticle);
/*文章列表接口*/
router.get("/article/getArticleList", article.getArticleList);
/*文章详情接口*/
router.get("/article/getArticleDetail", article.getArticleDetail);
/*删除文章接口*/
router.post("/article/deleteArticle", article.deleteArticle);
/*登录接口*/
router.post("/user/login", user.login);
/*登出接口*/
router.post("/user/logout", user.logout);
/*注册接口*/
router.post("/user/registered", user.registered);
module.exports = router;
