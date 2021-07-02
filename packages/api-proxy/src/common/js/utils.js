/**
 *
 * @param {Object} options 原参数
 * @param {Object} updateOrRemoveOpt 要修改或者删除的参数
 * @param {Object} extraOpt 额外增加的参数
 * @returns {Object} 返回参数
 * @example
 * changeOpts({ a: 1, b: 2 }, {
 *  a: 'c', // a 变为 c
 *  b: '' // 删除 b
 * }, {
 *  d: 4 // 增加 d
 * })
 */

function changeOpts (options, updateOrRemoveOpt = {}, extraOpt = {}) {
  let opts = {}

  Object.keys(options).forEach(key => {
    let myKey = updateOrRemoveOpt.hasOwnProperty(key) ? updateOrRemoveOpt[key] : key
    if (myKey !== '') {
      opts[myKey] = options[key]
    }
  })

  opts = Object.assign({}, opts, extraOpt)

  return opts
}

/**
 * @param {Object} opts 原参数
 * @param {Function} getOptions 获取 success 回调修改后的参数
 */
const handleSuccess = (opts, getOptions = noop, thisObj) => {
  if (!opts.success) {
    return
  }
  const _this = thisObj || this
  const cacheSuc = opts.success
  opts.success = res => {
    const changedRes = getOptions(res) || res
    cacheSuc.call(_this, changedRes)
  }
}

function genFromMap () {
  const result = {}
  const platforms = ['wx', 'ali', 'swan', 'qq', 'tt', 'web', 'dd']
  platforms.forEach((platform) => {
    result[`__mpx_src_mode_${platform}__`] = platform
  })
  return result
}

function getEnvObj () {
  if (__mpx_mode__ === 'wx') {
    return wx
  } else if (__mpx_mode__ === 'ali') {
    return my
  } else if (__mpx_mode__ === 'swan') {
    return swan
  } else if (__mpx_mode__ === 'qq') {
    return qq
  } else if (__mpx_mode__ === 'tt') {
    return tt
  } else if (__mpx_mode__ === 'dd') {
    return dd
  }
}

function warn (msg) {
  console.warn && console.warn(`[@mpxjs/api-proxy warn]:\n ${msg}`)
}

function error (msg) {
  console.error && console.error(`[@mpxjs/api-proxy error]:\n ${msg}`)
}

function noop () {
}

function makeMap (arr) {
  return arr.reduce((obj, item) => {
    obj[item] = true
    return obj
  }, {})
}

const inBrowser = typeof window !== 'undefined'

export {
  changeOpts,
  handleSuccess,
  genFromMap,
  getEnvObj,
  error,
  warn,
  noop,
  makeMap,
  inBrowser
}
