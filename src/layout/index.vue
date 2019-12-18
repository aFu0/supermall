<template>
  <div>
    <loading></loading>
    <!-- 动画 -->
    <transition>
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

</style>
