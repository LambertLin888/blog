import axios from 'axios'
let baseurl =
  process.env.NODE_ENV === 'production'
    ? 'http://api.linbenjian.work'
    : 'http://localhost:8080'

const insertArticle = params => {
  return axios.post(`${baseurl}/api/article/insertArticle`, params)
}

const getArticleList = params => {
  return axios.get(`${baseurl}/api/article/getArticleList`, params)
}

const getArticleDetail = params => {
  return axios.get(`${baseurl}/api/article/getArticleDetail`, params)
}

export { insertArticle, getArticleList, getArticleDetail }
