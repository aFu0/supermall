<template>
  <div>
    <nav-bar
      :rightIcon="rightIcon"
      >
      <template #left-text>
        <svg-icon iconNames="position"/>
      </template>
    </nav-bar>
    <van-swipe @change="onChange">
      <van-swipe-item>
        <img class="img" src="http://img1.imgtn.bdimg.com/it/u=2752453349,2871240348&fm=26&gp=0.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img class="img" src="http://img1.imgtn.bdimg.com/it/u=2752453349,2871240348&fm=26&gp=0.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img class="img" src="http://img1.imgtn.bdimg.com/it/u=2752453349,2871240348&fm=26&gp=0.jpg" alt="">
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/3
      </div>
    </van-swipe>
  </div>
</template>

<script>
import navBar from '@/components/navBar'
import API from '@/api/modules/home'
export default {
  name: 'home',
  data () {
    return {
      current: 0,
      rightIcon: [
        {
          id: 3,
          iconName: 'search',
          fun: this.aaa
        }
      ]
    }
  },
  created () {
    // 调取数据
    API.getHomeData({
      type: 'sell',
      page: 1
    }).then(res => {
      console.log(res)
    })
  },
  methods: {
    // 轮播
    onChange (index) {
      this.current = index
    },
    aaa () {
      console.log('aaa')
    }
  },
  components: {
    navBar
  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>
