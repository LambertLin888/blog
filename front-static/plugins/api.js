import axios from 'axios'
let baseurl = 'http://127.0.0.1:8001'
if (process.env.NODE_ENV === 'production') {
  baseurl = 'http://www.linbenjian.work'
  if (process.env.MODE === 'test') {
    baseurl = 'http://test.linbenjian.work'
  }
}
const getArticleList = params => {
  return axios.get(`${baseurl}/api/article/getArticleList`, params)
}

const getArticleDetail = params => {
  return axios.get(`${baseurl}/api/article/getArticleDetail`, params)
}

export { getArticleList, getArticleDetail }
