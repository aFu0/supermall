<template>
  <div>
    <button
      class="flexoBtn"
    >按钮</button>
  </div>
</template>

<script>
export default {
  name: 'flexoBtn',
  props: {
    bgColor: {
      type: String
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.flexoBtn {
  width: 100%;
  height: 88px;
  border: 0;
  border-radius: 10px;
  background-color: #c7c884;
}
</style>
