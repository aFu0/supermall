<template>
  <div class="goods">
    <nav-bar
      :showLeftIcon="false"
      title="购物车"
    ></nav-bar>
    <section class="content">
      <statistic-item></statistic-item>
    </section>
  </div>
</template>

<script>
import navBar from '@/components/navBar'
import statisticItem from './components/statisticItem'
export default {
  name: 'goodsCart',
  provide () {
    return {
    }
  },
  data () {
    return {
      btnStyle: {}
    }
  },
  created () {
  },
  methods: {
    aaa () {
      console.log(Date.now())
    }
  },
  components: {
    navBar,
    statisticItem
  }
}
</script>

<style lang="scss" scoped>
.goods {
  padding: 118px 0;
}
</style>
