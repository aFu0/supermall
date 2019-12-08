<template>
  <div class="tabbar">
    <div :class="['tabbar__item', {'tabbar__active':activeState === tab.router}]" v-for="tab in tabBarConfig"
      :key="tab.active"
      @click="actives(tab.active, tab.router)"
      >
      <p class="tabbar__itemicon"><svg-icon :iconNames="tab.normal"/></p>
      <p class="tabbar__itemtext">{{tab.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data () {
    return {
      activeState: '0',
      tabBarConfig: [
        {
          title: '首页',
          normal: 'home',
          active: '0',
          router: '/home'
        },
        {
          title: '分类',
          normal: 'classify',
          active: '1',
          router: '/classify/index'
        },
        {
          title: '购物车',
          normal: 'goodsCart',
          active: '2',
          router: '/goods-cart/index'
        },
        {
          title: '我的',
          normal: 'mine',
          active: '3',
          router: '/mine/index'
        }
      ]
    }
  },
  created () {
    this.activeState = this.$route.fullPath
  },
  methods: {
    actives (val, route) {
      this.activeState = route
      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 88px;
  background-color: #ffcccc;
  &__item {
    text-align: center;
    color: #8A8A8A;
  }
  &__itemicon {
    font-size: 40px;
  }
  &__itemtext {
    font-size: 20px;
  }
  &__active {
    color: #ff33cc;
  }
}
</style>
