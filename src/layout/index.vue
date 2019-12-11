<template>
  <div>
    <loading></loading>
    <!-- 动画 -->
    <transition>
      <router-view />
    </transition>
    <!-- tabBar -->
    <tab-bar v-show="$route.meta.showTabBar"/>
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
  components: {
    tabBar,
    loading
  }
}
</script>

<style lang="scss" scoped>

</style>
