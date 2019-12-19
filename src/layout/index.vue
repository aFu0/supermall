<template>
  <div class="app-wrapper">
    <loading></loading>
    <!-- 动画 -->
    <transition name="enter-away">
      <router-view :key="viewKey"/>
    </transition>
    <!-- tabBar -->
    <tab-bar v-show="$route.meta.showTabBar" :activeState="viewKey"/>
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'
import loading from '@/components/loading'
export default {
  name: 'layout',
  data () {
    return {
    }
  },
  computed: {
    viewKey () {
      return this.$route.path
    }
  },
  components: {
    tabBar,
    loading
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
}
.enter-away-enter-active {
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  // left: 0;
  animation: enter .6s;
}
.enter-away-leave-active {
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  // background-color: rgba(250,250,250,1);
  // left: 0;
  animation: away .6s reverse;
}
@keyframes enter {
  0% {
    transform: translate(100%,0)
  }
  100% {
    transform: translate(0,0)
  }
}
@keyframes away {
  0% {
    transform: translate(-100%,0)
  }
  100% {
    transform: translate(0,0)
  }
}
</style>
