
// 当前请求的版本  production (生产版本)  development (开发版本)
const ENV = process.env.NODE_ENV
/**
* 接口请求地址
* 开发环境使用代理地址, 生产环境使用 API 地址
* @return {string}
*/
function requestUrl () {
  let url = '/api'
  if (ENV === 'production') {
    url = process.env.VUE_APP_SERVER_URL
  }
  return url
}

/**
 * get 请求
 */
function requestByGet (axios, url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err.data)
    })
  })
}

/**
 * post 请求
 */
function requestByPost (axios, url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: params
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err.data)
    })
  })
}

export {
  requestUrl,
  requestByGet,
  requestByPost
}
