<template>
  <div :class="['navigation-bar', {'white-bar': whiteBar}]">
    <!-- navbar -->
    <section class="nav-bar">
      <!-- left -->
      <span
        class="nav-bar__left">
        <slot name="left-text">
          <svg-icon @click.native="backClick" :iconNames="back"/>
        </slot>
      </span>
      <!-- center -->
        <slot name="title">
          <h2 class="nav-bar__center">{{title}}</h2>
        </slot>
      <!-- right -->
      <span class="nav-bar__right">
        <slot name="right-text">
          <svg-icon
            class="icons"
            v-for="rightIcons in rightIcon"
            :key="rightIcons.id"
            @click.native="rightIcons.fun"
            :iconNames="rightIcons.iconName" />
        </slot>
      </span>
    </section>
    <slot name="tab"></slot>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  props: {
    // 左边的 icon
    back: {
      type: String,
      default: 'back'
    },
    title: {
      type: String,
      default: '首页'
    },
    // 右边的 icons
    rightIcon: {
      type: Array
    },
    // 导航栏的白色
    whiteBar: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    backClick () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  width: 100%;
  background-color: #f7daf7;
  box-shadow:0px 0px 16px 0px rgba(123,136,151,.2);
}
.white-bar {
  background-color: #fff;
}
.nav-bar {
  position: relative;
  top: 0;
  left: 0;
  height: 88px;
  &__left {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    padding-left: 30px;
    font-size: 40px;
    line-height: 88px;
    vertical-align: middle;
  }
  &__center {
    position: relative;
    font-size: 34px;
    font-weight: normal;
    line-height: 88px;
    text-align: center;
  }
  &__right {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    padding-right: 30px;
    font-size: 36px;
    line-height: 88px;
  }
}
.icons {
  padding-right: 20px;
  &:last-child {
    padding-right: 0;
  }
}
</style>
