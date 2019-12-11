<template>
  <div class="classify">
    <loading v-show="loading"></loading>
    <observer @getData="getData">
    <!-- 商品内容 -->
    <!-- <section class="goods-sum">
      <goods-card
        class="goods-sum__goods"
        v-for="goodsa in goodsList"
        :key="goodsa.iid"
        :goodImg="goodsa.showLarge.img"
        :header="goodsa.title"
        :price="goodsa.orgPrice"
        :collectNum="goodsa.sale"
      ></goods-card>
    </section> -->

      <section v-for="(item, i) in quantity" :key="i" @click="aaa" class="item">{{i}}</section>
    </observer>
  </div>
</template>

<script>
// import goodsCard from '@/components/goodsCard'
// import API from '@/api/modules/home'
import observer from './observer'
// loading
import loading from '@/components/loading'
export default {
  name: 'classify',
  data () {
    return {
      // 数据条数
      quantity: 1,
      loading: false
      // getGoodsParams: {
      //   type: 'sell',
      //   page: 1
      // },
      // goodsList: []
    }
  },
  created () {
    // API.getTabPageData(this.getGoodsParams).then(res => {
    //   this.goodsList = res.data.list
    //   console.log(res)
    // })
  },
  methods: {
    aaa () {
      console.log(123)
    },
    getData (callback) {
      window.setTimeout(() => {
        this.loading = false
        this.quantity += 10
        if (this.quantity >= 120) {
          // eslint-disable-next-line standard/no-callback-literal
          callback('close')
        } else {
          // eslint-disable-next-line standard/no-callback-literal
          callback(false)
        }
      }, 3000)
      this.loading = true
    }
  },
  components: {
    observer,
    loading
    // goodsCard
  }
}
</script>

<style lang="scss" scoped>
.classify {
  padding: 30px;
  box-sizing: border-box;
}
.goods-sum {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods-sum__goods {
  margin-bottom: 20px;
}
.item {
  width: 100%;
  height: 200px;
  margin-bottom: 30px;
  text-align: center;
  line-height: 200px;
  font-weight: 600;
  font-size: 40px;
  border-radius: 20px;
  box-shadow:0px 6px 20px 0px rgba(0,19,34,0.1);
}
</style>
