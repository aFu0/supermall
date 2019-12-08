<template>
    <button
      @click="btnClick"
      :class="['btn', bbb]"
      :style="ccc"
    >按钮</button>
</template>

<script>
export default {
  name: 'btn',
  inject: ['coverage'],
  data () {
    return {
      ccc: {},
      colorArr: ['red', 'blue'],
      extendColor: []
    }
  },
  props: {
    bgColor: {
      type: String
    }
  },
  computed: {
    bbb () {
      let result = this.bgColor
      if (this.bgColor) {
        if (this.colorArr.includes(this.bgColor) === false && this.coverage.foo.hasOwnProperty(this.bgColor) === false) {
          result = ''
          this.$set(this.ccc, 'backgroundColor', this.bgColor)
        } else if (this.colorArr.includes(this.bgColor) === false && this.coverage.foo.hasOwnProperty(this.bgColor)) {
          result = ''
          this.$set(this.ccc, 'backgroundColor', this.coverage.foo[this.bgColor])
        }
      } else {
        if (this.coverage.bgColor) {
          result = ''
          this.$set(this.ccc, 'backgroundColor', this.coverage.bgColor)
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
