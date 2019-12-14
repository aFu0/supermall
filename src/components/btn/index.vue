<template>
    <button
      @click="btnClick"
      :class="['btn', propsMdn]"
      :style="englishColor"
    >按钮</button>
</template>

<script>
export default {
  name: 'btn',
  inject: ['coverage'],
  data () {
    return {
      // 里面没有定制  使用者自己定义的样式
      englishColor: {},
      // 组件里面定制好的样式 // 控制 类 的
      colorArr: ['red', 'blue']
      //
      // extendColor: []
    }
  },
  props: {
    bgColor: {
      type: String
    }
  },
  computed: {
    propsMdn () {
      let result = this.bgColor
      // 是 props 传值还是 inject 传值
      if (this.bgColor) {
        // 判断 props 传过来的是否 data 里有定义好的类
        if (this.colorArr.includes(this.bgColor) === false && this.coverage.foo.hasOwnProperty(this.bgColor) === false) {
          result = ''
          this.$set(this.englishColor, 'backgroundColor', this.bgColor)
        } else if (this.colorArr.includes(this.bgColor) === false && this.coverage.foo.hasOwnProperty(this.bgColor)) {
          result = ''
          this.$set(this.englishColor, 'backgroundColor', this.coverage.foo[this.bgColor])
        }
      } else {
        if (this.coverage.bgColor) {
          result = ''
          this.$set(this.englishColor, 'backgroundColor', this.coverage.bgColor)
        }
      }
      return result
    }
  },
  methods: {
    btnClick () {
      this.$emit('btnClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  padding: 20px 10px;
  border: 0;
  border-radius: 20px;
  background-color: red;
}
.red {
  background-color: red;
}
.blue {
  background-color: #0085EE;
}
</style>
