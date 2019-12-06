<template>
  <div class="tab-page">
    <div class="tab-page__item" v-for="(tabN,i) in tabList" :key="i" @click="tabClick(i)">
      <span :class="['tab-page__text', {'tab-page__text--active': activeIn === i}]">{{tabN.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabPage',
  props: {
    tabList: {
      type: Array
    }
  },
  methods: {
    tabClick (i) {
      this.activeIn = i
      this.$emit('tabClick')
    }
  },
  data () {
    return {
      activeIn: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-page {
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  background-color: #fff;
  box-shadow:0px 3px 1vw 0px rgba(123,136,151,.2);
  &__item {
    padding: 10px 0;
  }
  &__text {
    color: #8A8A8A;
    padding: 10px 0;
    &--active {
      color: #ff99cc;
      border-bottom: 1px solid #ff99cc;
    }
  }
}
</style>
