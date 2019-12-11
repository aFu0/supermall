import vuex from '@/store/index'

/**
 * 引入axios
 */
import axios from 'axios'
/**
 * 引入定义好的方法
 */
import { requestUrl, requestByGet, requestByPost } from '@/api/axios'

/**
 * 创建一个 axios 请求
 */
const instance = axios.create({
  //  请求的地址
  baseURL: requestUrl(),
  // 请求超时时间
  timeout: 1000
})
/**
     * 把 axios 的 all 和 spread 方法赋给 instance
     */
instance.all = axios.all
instance.spread = axios.spread
// 给 post 设置请求头
instance.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

/**
 * get 请求
 * @param {String} url 请求的路径
 * @param {Object} params 请求的参数
 */
function get (url, params) {
  return requestByGet(instance, url, params)
}

/**
 * post 请求
 * @param {String} url 请求的路径
 * @param {Object} params 请求的参数
 */
function post (url, params) {
  return requestByPost(instance, url, params)
}

/**
 * 拦截器
 */
instance.interceptors.request.use(response => {
  vuex.commit('switchLoading', true)
  return response
}, error => {
  vuex.commit('switchLoading', false)
  return error
})

instance.interceptors.response.use(response => {
  vuex.commit('switchLoading', false)
  return response
}, error => {
  vuex.commit('switchLoading', false)
  return error
})

export {
  get,
  post
}
