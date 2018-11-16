/**
 * @author linbenjian
 * @email linbenjian@tuzhanai.com
 * @create date 2018-11-14 16:47:13
 * @modify date 2018-11-14 16:47:13
 * @desc 服务端路由
 */
const router = require('koa-router')()
const article = require('../controller/article')

router.prefix('/api')
/*添加文章接口*/
router.post('/article/insertArticle', article.insertArticle)
/*文章列表接口*/
router.get('/article/getArticleList', article.getArticleList)
/*文章详情接口*/
router.get('/article/getArticleDetail', article.getArticleDetail)
module.exports = router
