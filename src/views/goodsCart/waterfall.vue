<template>
  <div class="waterfall">
    <div class="item" v-for="item in list" :key="item.id">
      <img class="item__img" :src="item.img" alt="">
      <p class="item__title">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'waterfall',
  data () {
    return {
      list: [
        {
          id: '1',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: 'Plunker 是一个在线社区，用于创建，协作和共享您的 We'
        },
        {
          id: '2',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: '编辑 JavaScript、CSS 和 HTML 并获得实时结果。使用外置资源，并和你的团队在线合作。'
        },
        {
          id: '3',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: '允许您快速测试 JavaScript 代码片段。'
        },
        {
          id: '4',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: '添加 TogetherJS 到您的网站，让用户实时互助，协作更简单。'
        },
        {
          id: '5',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: '你可以在 StackOverflow 查看或者发布带有 JavaScript 标签的问题你可以在 StackOverflow 查看或者发布带有 JavaScript 标签的问题'
        },
        {
          id: '6',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: '浏览 JavaScript 的历史版本特性和实现情况.'
        },
        {
          id: '7',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: 'JS Bin 是一种开源的协作式的web 开发调试工具'
        },
        {
          id: '8',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: 'Plunker 是一个在线社区，用于创建，协作和共享您的 We'
        },
        {
          id: '9',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: '编辑 JavaScript、CSS 和 HTML 并获得实时结果。使用外置资源，并和你的团队在线合作。'
        },
        {
          id: '10',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: '允许您快速测试 JavaScript 代码片段。'
        },
        {
          id: '11',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: '添加 TogetherJS 到您的网站，让用户实时互助，协作更简单。'
        },
        {
          id: '12',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: '你可以在 StackOverflow 查看或者发布带有 JavaScript 标签的问题你可以在 StackOverflow 查看或者发布带有 JavaScript 标签的问题'
        },
        {
          id: '13',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: '浏览 JavaScript 的历史版本特性和实现情况.'
        },
        {
          id: '14',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wBFCrq9wDItO8Ncr7Y5zjlxZJ2yx_7Mr5qfc-9bFtIbMXj58&s',
          title: 'JS Bin 是一种开源的协作式的web 开发调试工具'
        }
      ]
    }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.waterfall {
  padding: 0 20px 118px 20px;
}
.item {
  width: 334px;
  margin: 10px;
  border-radius: 10px;
  box-shadow:0px 6px 20px 0px rgba(0,19,34,0.1);
  &__img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  &__title {
    padding: 10px;
  }
}
</style>
