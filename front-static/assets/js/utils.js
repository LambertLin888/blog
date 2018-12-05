/**
 * 拷贝数据
 * @param  {*}  data   要拷贝的源数据
 * @param  {boolean} [isDeep=false] 是否深拷贝，默认浅拷贝
 * @return {*}         返回拷贝后的数据
 */
import categoryOriginList from '~/constant/category-list.json'
const primitiveTypes = ['undefined', 'string', 'number', 'boolean']
const clone = (data, isDeep = false) => {
  if (data === null) {
    return data
  }
  const t = typeof data
  if (t === 'function' || primitiveTypes.indexOf(t) >= 0) {
    return data
  }
  if (Array.isArray(data)) {
    return cloneArr(data, isDeep)
  }
  return cloneObj(data, isDeep)
}
const cloneObj = (obj, isDeep) => {
  if (!isDeep) {
    return Object.assign({}, obj)
  }
  const ret = {}
  const keys = Object.keys(obj)
  keys.forEach(k => {
    const d = obj[k]
    if (d === null) {
      ret[k] = d
      return true
    }
    const t = typeof d
    if (t === 'function' || primitiveTypes.indexOf(t) >= 0) {
      ret[k] = d
      return true
    }
    ret[k] = Array.isArray(d) ? cloneArr(d, true) : cloneObj(d, true)
  })
  return ret
}
const cloneArr = (arr, isDeep) => {
  if (!isDeep) {
    return arr.concat()
  }
  const ret = []
  arr.forEach((d, i) => {
    if (d === null) {
      ret[i] = d
      return true
    }
    const t = typeof d
    if (t === 'function' || primitiveTypes.indexOf(t) >= 0) {
      ret[i] = d
      return true
    }
    ret[i] = Array.isArray(d) ? cloneArr(d, true) : cloneObj(d, true)
  })
  return ret
}

/**
 * 日期格式化
 */
/**
 * 格式化日期
 * @param  {string} [fmt=yyyy-MM-dd]  格式化串，支持的格式化原子：y-年，M-月，d-天，h-时，m-分，s-秒，S-毫秒，q-季度
 * @param  {Date | number} [date] 日期或日期毫秒数
 * @return {string}      返回格式化后的内容
 */
const formatDate = (fmt = 'yyyy-MM-dd', date) => {
  const realDate = date ? new Date(date) : new Date()
  const o = {
    'M+': realDate.getMonth() + 1,
    'd+': realDate.getDate(),
    'h+': realDate.getHours(),
    'm+': realDate.getMinutes(),
    's+': realDate.getSeconds(),
    'q+': Math.floor((realDate.getMonth() + 3) / 3),
    S: realDate.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    const y = (realDate.getFullYear() + '').substr(4 - RegExp.$1.length)
    fmt = fmt.replace(RegExp.$1, y)
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      const d =
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      fmt = fmt.replace(RegExp.$1, '' + d)
    }
  }
  return fmt
}
/**
 * 格式化返回的文章列表
 * @param  content {Array|Object}
 * @param  categoryList {Array|Object} 类别原数据
 * @return {Array}      返回格式化后的内容
 */
const formatArticleContent = (content, categoryList = categoryOriginList) => {
  if (Array.isArray(content)) {
    if (content.length == 0) {
      return []
    }
    content.map(item => {
      let { createTime, category } = item
      item.createTime =
        (createTime && formatDate('yyyy-MM-dd', parseInt(createTime))) || ''
      item.category = formatCategory(category, categoryList)
      return item
    })
    return content
  } else {
    let { createTime, category } = content
    content.createTime =
      (createTime && formatDate('yyyy-MM-dd hh:mm:ss', parseInt(createTime))) ||
      ''
    content.category = formatCategory(category, categoryList)
    return content
  }
}
const formatCategory = (category, categoryList) => {
  if (!category || !categoryList) {
    return ''
  }
  let categoryNameList = []
  category = category.split(',') || []
  for (let value of category) {
    for (let item of categoryList) {
      if (item.value == value) {
        categoryNameList.push(item.label)
        categoryList = item.children
        break
      }
    }
  }
  return categoryNameList.join('/')
}
export { clone, formatDate, formatArticleContent }
