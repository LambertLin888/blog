import axios from 'axios'
let baseurl =
  process.env.NODE_ENV === 'production'
    ? 'http://api.linbenjian.work'
    : 'http://localhost:3000'

const insectArticle = params => {
  return axios.post(`${baseurl}/api/article/insectArticle`, params)
}

const getArticleList = params => {
  return axios.get(`${baseurl}/api/article/getArticleList`, params)
}

const getArticleDetail = params => {
  return axios.get(`${baseurl}/api/article/getArticleList`, params)
}

export { insectArticle, getArticleList, getArticleDetail }
