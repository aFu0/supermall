<template>
  <div class="observer">
    <slot></slot>
    <!-- 触发 -->
    <div class="trigger" ref="trigger"></div>
  </div>
</template>

<script>
let foo
export default {
  name: 'observer',
  data () {
    return {
      // 获取数据开关
      getSwitch: true
    }
  },
  computed: {
  },
  mounted () {
    this.$nextTick(() => {
      this.observer()
    })
  },
  methods: {
    observer () { // 发布交叉观察器   第一个参数 （ 回调函数 ）
      foo = new IntersectionObserver((entries) => {
        console.log(entries)
        if (entries[0].isIntersecting && this.getSwitch) {
          this.getSwitch = false
          this.$emit('getData', (res) => {
            if (res === false) {
              this.getSwitch = true
            } else if (res === 'close') {
              this.stopObserve()
            }
          })
          // this.intersectingSyntony()
        }
      }, { rootMargin: 20 + 'px' })// 第二个  （ 选项 ）
      // 开始观察   (传入一个观察 DOM 元素)   如果需要观察多个节点， 需要调用多次
      foo.observe(this.$refs.trigger)
    },

    // 停止观察  (传入一个停止观察 DOM 元素)
    stopObserve () {
      foo.unobserve(this.$refs.trigger)
    }
    // foo.unobserve(element)

    // 关闭观察器
    // foo.disconnect()
  },
  // 关闭组件时 关闭观察器
  beforeDestroy () {
    foo.disconnect()
  }
}
</script>

<style lang="scss" scoped>
// 触发
.trigger {
  width: 100%;
  height: 1px;
  background-color: #f0f;
}
</style>
