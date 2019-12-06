import { get } from '@/api/request'
const home = {
  // 上面数据
  getHomeData (params) {
    return get(`/v1/home/multidata`, params)
  },
  // tab 数据
  getTabPageData (params) {
    return get(`/v1/home/data`, params)
  }
}
export default home
