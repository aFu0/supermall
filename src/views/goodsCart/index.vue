<!--<template>
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

-->

<template>
  <div ref="goods">
    <btn bgColor="blue"></btn>
    <btn bgColor="red" weight></btn>
    <btn bgColor="gray"></btn>
    <btn></btn>
    <btn bgColor="#0f0"></btn>
    <btn></btn>
    <btn></btn>
    <btn></btn>
    <btn></btn>
    <btn></btn>
    <btn></btn>
  </div>
</template>

<script>
import btn from '@/components/btn'
export default {
  name: 'goodsCart',
  provide () {
    return {
      coverage: {
        // 设置全体颜色
        bgColor: '#00f',
        foo: {
          // 设置里面没有的颜色 单个设置
          // green: '#0f0',
          bgColor: '#00f',
          gray: '#8a8a8a'
        }
      }
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
    btn
  }
}
</script>

<style lang="scss" scoped>
.aaaa {
  background-color: #00f;
}
</style>
