import axios from 'axios'
let baseurl =
  process.env.NODE_ENV === 'production'
    ? 'http://www.linbenjian.work'
    : 'http://127.0.0.1:8001'

const getArticleList = params => {
  return axios.get(`${baseurl}/api/article/getArticleList`, params)
}

const getArticleDetail = params => {
  return axios.get(`${baseurl}/api/article/getArticleDetail`, params)
}

export { getArticleList, getArticleDetail }
