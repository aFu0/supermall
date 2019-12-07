<template>
  <div class="home-sum">
    <!-- nav-bar -->
    <nav-bar
      :showLeftIcon="false"
      title="首页"
      >
    </nav-bar>
    <!-- swipe -->
    <section class="swipe-sum">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(swipea, i) in swipedata.list" :key="i">
          <a :href="swipea.link">
            <img class="img" :src="swipea.image" alt="">
          </a>
        </van-swipe-item>
      </van-swipe>
    </section>
    <!-- 轮播图下面 -->
    <section class="vajra">
      <a class="vajra__either" :href="vajra.link" v-for="(vajra, i) in recommend.list" :key="i">
        <img class="vajra__vajra-img" :src="vajra.image" alt="">
        <p class="vajra__title">{{vajra.title}}</p>
      </a>
    </section>
    <!-- 本周最热 -->
    <section class="keyword">
      <a href="http://act.mogujie.com/zzlx67">
        <img class="keyword__recommend" src="~@/assets/images/home/recommend_bg.jpg" alt="">
      </a>
    </section>
    <!-- tab 页 -->
    <section class="tab-sum">
      <tab-page :tabList="tabList" @tabClick="tabClick"></tab-page>
    </section>
    <!-- 商品内容 -->
    <section class="goods-sum">
      <goods-card
        class="goods-sum__goods"
        v-for="goodsa in goodsList"
        :key="goodsa.iid"
        :goodImg="goodsa.showLarge.img"
        :header="goodsa.title"
        :price="goodsa.orgPrice"
        :collectNum="goodsa.sale"
      ></goods-card>
    </section>
    <ul>
      <li v-for="i in 99" :key="i">{{i}}</li>
    </ul>
  </div>
</template>

<script>
import navBar from '@/components/navBar'
import tabPage from '@/components/tabPage'
import goodsCard from '@/components/goodsCard'
import API from '@/api/modules/home'
export default {
  name: 'home',
  data () {
    return {
      current: 0,
      // 轮播图
      swipedata: [],
      // 推荐
      recommend: [],
      tabList: [
        {
          title: '流行'
        },
        {
          title: '新款'
        },
        {
          title: '精选'
        }
      ],
      goodsList: [],
      getGoodsParams: {
        type: 'sell',
        page: 1
      }
    }
  },
  created () {
    // 调取数据
    API.getHomeData().then(res => {
      this.swipedata = res.data.banner
      this.recommend = res.data.recommend
      // this.keyword = res.data.dKeyword
      console.log(res)
    })
    // 调取 tab 页数据
    this.getGoodData()
  },
  methods: {
    // 调取 tab 页数据
    getGoodData () {
      API.getTabPageData(this.getGoodsParams).then(res => {
        this.goodsList = res.data.list
        console.log(res)
      })
    },
    // 轮播
    onChange (index) {
      this.current = index
    },
    // 点击切换 tab
    tabClick (i) {
      switch (i) {
        case 0:
          this.getGoodsParams.type = 'sell'
          this.getGoodData()
          break
        case 1:
          this.getGoodsParams.type = 'new'
          this.getGoodData()
          break
        case 2:
          this.getGoodsParams.type = 'pop'
          this.getGoodData()
          break
      }
    }
  },
  components: {
    navBar,
    tabPage,
    goodsCard
  }
}
</script>

<style lang="scss" scoped>
.home-sum {
  padding-bottom: 88px;
  box-sizing: border-box;
}
.img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.swipe-sum {
  padding-top: 88px;
}
// 轮播图下面
.vajra {
  display: flex;
  padding: 20px 30px 40px;
  box-sizing: border-box;
  border-bottom: 20px solid #ddd;
  justify-content: space-around;
  &__either {
    padding: 0 10px;
    text-align: center;
    &:last-child {
      padding-right: 0;
    }
    &:first-child {
      padding-left: 0;
    }
  }
  &__vajra-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  &__title {
    color: #666;
  }
}
// 本周最热
.keyword {
  width: 100%;
  &__recommend {
    width: 100%;
  }
}
// tab page
.tab-sum {
  position: sticky;
  top: 88px;
}
// 商品内容
.goods-sum {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  box-sizing: border-box;
  &__goods {
    margin-bottom: 20px;
    &:nth-child(2n) {
      margin-left: 20px;
    }
  }
}
</style>
