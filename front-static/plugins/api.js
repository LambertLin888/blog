import axios from 'axios'
let baseurl =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:20001'
    : 'http://localhost:10001'

const getArticleList = params => {
  return axios.get(`${baseurl}/api/article/getArticleList`, params)
}

const getArticleDetail = params => {
  return axios.get(`${baseurl}/api/article/getArticleDetail`, params)
}

export { getArticleList, getArticleDetail }
