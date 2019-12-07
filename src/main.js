import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/icons'

// 懒加载
import VueLazyload from 'vue-lazyload'

// style
import '@/assets/style/reset.css'

// 瀑布流
import waterfall from 'vue-waterfall2'

// vant
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe).use(SwipeItem)

// 瀑布流
Vue.use(waterfall)

// 懒加载
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
