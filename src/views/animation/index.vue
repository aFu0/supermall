<template>
  <div class="animation">
    <!-- 介绍 -->
    <div>
      <p class="header">旋转:</p>
      <span> rotate（中心为原点）</span>
      <p class="header">扭曲、倾斜:</p>
      <span> skew（skew(x,y), skewX(x), skewY(y)）</span>
      <p class="header">缩放:</p>
      <span> scale（scale(x,y), scaleX(x), scaleY(y)）</span>
      <p class="header">移动:</p>
      <span> translate（translateX,translateY）</span>
      <p class="header">矩阵变形:</p>
      <span> matrix。</span>
    </div>
<!-- ------------------------------------------------------------------------------------------ -->
    <div class="fun">
      <button @click="show = !show" class="btn">弹跳</button>
      <!-- <transition name="fade">
        <div v-show="show" class="one">弹跳</div>
      </transition> -->
      <transition name="get-away">
        <div v-show="show" class="two">进场/离场</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animation',
  data () {
    return {
      show: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-size: 30px;
  font-weight: 700;
}
.animation {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
}
.fun {
  padding-top: 60px;
}
.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88px;
  border: 0;
  background-color: #ddd;
}
// ////////////////////////////////////////////////////////////////////////////
.one,
.two {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 200px;
  height: 300px;
  text-align: center;
  font-size: 30px;
  color: #fff;
  line-height: 300px;
  border-radius: 20px;
  background-color: #999;
}
// 弹跳
.fade-enter-active {
  animation: bounce-in .5s;
}
.fade-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1)
  }
}
.get-away-enter-active {
  animation: enter 2s;
}
.get-away-leave-active {
  animation: away 2s reverse;
}
@keyframes enter {
  0% {
    transform: translate(100%,0)
  }
  100% {
    transform: translate(0,0)
  }
}
@keyframes away {
  0% {
    transform: translate(-100%,0)
  }
  100% {
    transform: translate(0,0)
  }
}
</style>
