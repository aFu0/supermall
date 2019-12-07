<template>
  <div class="classify">
    <goods-card
      ref="gooditem"
      class="goods"
      v-for="goodsa in goodsData"
      :key="goodsa.iid"
      :goodImg="goodsa.showLarge.img"
      :header="goodsa.title"
      :price="goodsa.orgPrice"
      :collectNum="goodsa.sale"
    ></goods-card>
  </div>
</template>

<script>
import goodsCard from '@/components/goodsCard'
import API from '@/api/modules/mine'
export default {
  name: 'classify',
  data () {
    return {
      goodsData: []
    }
  },
  created () {
    API.gethomedata({
      type: 'sell',
      page: 1
    }).then(res => {
      this.goodsData = res.data.list
      console.log(res)
    }).then(() => {
      this.waterfall()
    })
    // this.$nextTick(function () {
    //   this.waterfall()
    // })
  },
  methods: {
    waterfall () {
      console.log(123)
      for (var i = 0; i < this.goodsData.length; i++) {
        if (i < 2) {
          console.log(i)
        } else {
          console.log(i)
        }
      }
    }
  },
  components: {
    goodsCard
  }
}
</script>

<style lang="scss" scoped>
.classify {
  flex-wrap: wrap;
  padding: 0 30px;
}
.goods {
  margin-bottom: 20px;
  float: left;
  // &:nth-child(2n) {
  //   margin-left: 20px;
  // }
}
</style>
