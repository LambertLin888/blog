import axios from 'axios'
let baseurl = process.env.VUE_BASE_URL || 'http://localhost:9001'

axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    config && config.params && (config.params.platform = 'back')
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    // Do something with response data
    return response
  },
  error => {
    // Do something with response error
    return Promise.reject(error)
  }
)

const insertArticle = params => {
  return axios.post(`${baseurl}/api/article/insertArticle`, params)
}

const getArticleList = params => {
  return axios.get(`${baseurl}/api/article/getArticleList`, {
    platform: 'back',
    ...params
  })
}

const getArticleDetail = params => {
  return axios.get(`${baseurl}/api/article/getArticleDetail`, params)
}
const deleteArticle = params => {
  return axios.post(`${baseurl}/api/article/deleteArticle`, params)
}
const login = params => {
  return axios.post(`${baseurl}/api/user/login`, params)
}
const logout = () => {
  return axios.post(`${baseurl}/api/user/logout`)
}
const register = params => {
  return axios.post(`${baseurl}/api/user/register`, params)
}
export {
  insertArticle,
  getArticleList,
  getArticleDetail,
  deleteArticle,
  logout,
  login,
  register
}
