  <!-- <template>
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
-->
<template>
  <div>
    <router-link to="/animation">动画</router-link>
    <!-- 使用组件定义好的 -->
    <Button class="btn" bgColor="red" round="10px"></Button>
    <Button class="btn" bgColor="blue"></Button>
    <!-- 自己传入的 -->
    <Button class="btn" bgColor="green"></Button>
    <Button class="btn" bgColor="gray" round="10px"></Button>
    <Button class="btn" bgColor="#f96532" round="0"></Button>
    <Button class="btn" round="50%"></Button>
    <Button class="btn" bgColor="default"></Button>
    <Button class="btn" bgColor="#fff"></Button>
    <button>asadddddddddddddddddddddds</button>
  </div>
</template>

<script>
import Button from '@/components/btn/Button'
export default {
  name: 'mine',
  provide () {
    return {
      userDefined: {
        bgColor: '#fdd',
        // 自定义
        customize: {
          green: '#0f0',
          gray: '#8a8a8a'
        }
      }
    }
  },
  data () {
    return {}
  },
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 20px;
}
</style>
