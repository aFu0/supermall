import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/icons'

// 懒加载
import VueLazyload from 'vue-lazyload'

// style
import '@/assets/style/reset.css'

// vant
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe).use(SwipeItem)

// 懒加载
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
