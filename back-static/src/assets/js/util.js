/**
 * 拷贝数据
 * @param  {*}  data   要拷贝的源数据
 * @param  {boolean} [isDeep=false] 是否深拷贝，默认浅拷贝
 * @return {*}         返回拷贝后的数据
 */
const primitiveTypes = ['undefined', 'string', 'number', 'boolean']
function clone(data, isDeep = false) {
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
function cloneObj(obj, isDeep) {
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
function cloneArr(arr, isDeep) {
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

export { clone }
