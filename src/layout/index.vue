<template>
  <div>
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
export default {
  name: 'layout',
  data () {
    return {

    }
  },
  components: {
    tabBar
  }
}
</script>

<style lang="scss" scoped>

</style>
