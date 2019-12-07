<template>
  <div class="infinite-scroll">
    <slot></slot>
    <div class="observer" ref="observer"></div>
  </div>
</template>

<script>
let observer

export default {
  name: 'InfiniteScroll',
  props: {
    // 触底距离
    interval: {
      type: [String, Number],
      default: '500'
    }
  },
  data() {
    return {
      // 是否触发 $emit [函数节流]
      disabelFetch: true
    }
  },
  mounted() {
    // 页面挂载完毕。开启交叉观察者
    this.$nextTick(() => {
      this.observerScroll()
    })
  },
  activated() {
    this.observerClose()
  },
  deactivated() {
    this.observerScroll()
  },
  methods: {
    // 开启交叉观察者
    observerScroll() {
      const observerEl = this.$refs.observer
      observer = new IntersectionObserver((entries) => {
        const el = entries[0]
        if (el.isIntersecting && this.disabelFetch) {
          this.disabelFetch = false
          this.$emit('load', (res) => {
            // load 回调参数验证
            const verifyParam = ['close', false]
            if (verifyParam.includes(res)) {
              this.observerCallBack(res)
            } else {
              console.warn('InfiniteScroll 提示：参数错误。\n参数应为：[\'close\', false]')
            }
          })
        }
      }, { rootMargin: `${this.interval}px 0px` })
      observer.observe(observerEl)
    },
    // 回调参数对应执行方法
    observerCallBack(value) {
      switch (value) {
        case false:
          this.disabelFetch = true
          break
        case 'close':
          this.observerClose()
          break
        default:
          break
      }
    },
    // 关闭交叉观察者
    observerClose() {
      observer.unobserve(this.$refs.observer)
    }
  },
  beforeDestroy() {
    this.observerClose()
  }
}
</script>

<style lang="scss" scoped>
.observer {
  height: 2px;
}
</style>
