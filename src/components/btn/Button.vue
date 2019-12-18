<template>
  <div>
    <button
      :class="['Button',distinguishStyle,round]"
      :style="DIYs"
    >按钮</button>
  </div>
</template>

<script>
const styleKeys = {
  bgColor: 'backgroundColor',
  round: 'borderRadius',
  edge: 'border'
}
export default {
  name: 'Button',
  inject: ['userDefined'],
  props: {
    bgColor: {
      type: String
    },
    round: {
      type: [Boolean, String],
      default: false
    },
    edge: {
      type: [Boolean, String]
    }
  },
  data () {
    return {
      // 定义好的样式             //渲染到 class 上的
      workableArr: ['red', 'blue', 'bin'],
      // 使用者需要组件定义样式   //渲染到 style 上的
      DIYs: {}
    }
  },
  computed: {
    distinguishStyle () {
      let result = ''
      for (const key in styleKeys) {
        if (this.workableArr.includes(key)) {
          result = this[key]
        } else if (this.userDefined.customize.hasOwnProperty(key) === false) {
          result = ''
          // 就渲染到 style 上
          this.$set(this.DIYs, styleKeys[key], this[key])
          // 判断定义好的没有 且 inject 里有
        } else if (this.userDefined.customize.hasOwnProperty(key)) {
          result = ''
          // 那就把 inject 的渲染到 style 上
          this.$set(this.DIYs, styleKeys[key], this.userDefined.customize[this[key]])
        }
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.Button {
  width: 100%;
  height: 88px;
  font-size: 30px;
  color: #fff;
  border: 0;
  background-color: #999;
}
.round {
  border-radius: 88px;
}
.bin {
  border: 6px solid red;
  background-color: #fff;
}
.red {
  background-color: #f0f;
}
.blue {
  background-color: blue;
}
.fdd {
  background-color: #fdd;
}
</style>
