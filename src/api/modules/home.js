import { get } from '@/api/request'
const home = {
  getHomeData (params) {
    return get(`/v1/home/data`, params)
  }
}
export default home
