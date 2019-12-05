// import axios from 'axios'
// import store from '@/store'
// //      请求地址      GET请求      POST请求
// import { requestUrl, requestByGet, requestByPost } from '@/api/http'
// // 创建一个 axios 请求
// const instance = axios.create({
//   // 请求地址
//   baseURL: requestUrl(),
//   // 超时时间
//   timeout: 10000
// })
// // 并发请求
// // 把 axios的 all 和 spread 方法赋给 instance
// instance.all = axios.all
// instance.spread = axios.spread
// // 给 post 设置请求头
// instance.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

// // 不显示 loading 的请求队列
// const dontShowLoading = []
// // 请求队列
// const requestList = []

// /**
//  * 删除请求队列中的记录
//  */
// function clearList (url) {
//   if (dontShowLoading.includes(url)) {
//     dontShowLoading.splice(dontShowLoading.indexOf(url), 1)
//   } else if (requestList.includes(url)) {
//     requestList.splice(requestList.indexOf(url), 1)
//   } else {
//     console.warn(dontShowLoading)
//     console.warn(requestList)
//     console.warn(`未能在请求队列中查找到地址为[${url}]的请求。`)
//   }
// }

// /**
//  * get 请求
//  * @param {String} url 请求路径
//  * @param {Object} params 请求参数
//  * @param {Boolean} loading 是否显示 Loading(true)
//  */
// function get (url, params, loading = true) {
//   if (loading === false) {
//     dontShowLoading.push(`${requestUrl()}${url}`)
//   }
//   return requestByGet(instance, url, params)
// }
// /**
//  * post 请求
//  * @param {String} url 请求路径
//  * @param {Object} params 请求参数
//  */
// function post (url, params) {
//   return requestByPost(instance, url, params)
// }

// // 请求拦截器
// instance.interceptors.request.use((response) => {
//   // 其他请求数据（显示loading）
//   if (dontShowLoading.includes(`${requestUrl()}${response.url}`) === false) {
//     store.commit('global/MODIFY_LOADING', true)
//     // 保存请求至请求队列中(显示Loading)
//     requestList.push(`${requestUrl()}${response.url}`)
//   }
//   return response
// }, (err) => {
//   console.error(err)
//   store.commit('global/MODIFY_LOADING', false)
//   return Promise.reject(err)
// })

// // 响应拦截器
// instance.interceptors.response.use((response) => {
//   // 从请求队列中删除该记录
//   clearList(response.config.url)
//   if (requestList.length === 0) {
//     store.commit('global/MODIFY_LOADING', false)
//   }
//   return response
// }, (error) => {
//   store.commit('global/MODIFY_LOADING', false)
//   console.error(error)
//   return Promise.reject(error)
// })

// export {
//   get,
//   post
// }
