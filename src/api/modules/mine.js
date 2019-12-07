import { get } from '@/api/request'
const mine = {
  gethomedata (val) {
    return get('/v1/home/data', val)
  }
}
export default mine
