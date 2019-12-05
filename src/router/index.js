import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './modules/home'
import classify from './modules/classify'
import goodsCart from './modules/goodsCart'
import mine from './modules/mine'

Vue.use(VueRouter)

const routes = [
  home,
  classify,
  goodsCart,
  mine
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => {
    return err
  })
}

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
