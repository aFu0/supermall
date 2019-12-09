<template>
  <div class="mine">
    <nav-bar
      :showLeftIcon="false"
      title="晓帅的商场"
      >
      <template #tab>
        <section class="introduction">
          <div class="basic">
            <img class="basic__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPEXC1n6qkjiGNdEZR9DtmcY7tunbBuMTueuqcq4PjfXLZFOnEg&s" alt="">
            <div class="basic__message">
              <p class="basic__show-login">登录/注册</p>
              <p class="basic__phone-no">暂无绑定手机号</p>
            </div>
          </div>
        </section>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import navBar from '@/components/navBar'
export default {
  name: 'mine',
  data () {
    return {
    }
  },
  created () {
  },
  components: {
    navBar
  }
}
</script>

<style lang="scss" scoped>
.introduction {
  width: 100%;
  padding: 0 20px 20px;
  box-sizing: border-box;
}
.basic {
  display: flex;
  &__img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  &__message {
    padding-left: 10px;
    font-size: 28px;
    color: #fff;
  }
}
</style>
