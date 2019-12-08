<template>
  <div ref="goods">
    <btn bgColor="blue"></btn>
    <btn></btn>
    <btn bgColor="#0f0"></btn>
    <btn></btn>
    <btn bgColor="red" weight></btn>
    <btn></btn>
    <btn></btn>
    <btn bgColor="gray"></btn>
    <btn></btn>
    <btn></btn>
    <btn></btn>
  </div>
</template>

<script>
import btn from './btn'
export default {
  name: 'goodsCart',
  provide () {
    return {
      coverage: {
        bgColor: '#00f',
        foo: {
          green: '#0f0',
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
