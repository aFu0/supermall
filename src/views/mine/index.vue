<template>
  <div class="mine">
    <waterfall :col="2" :data="goodsData" :gutterWidth="20">
      <goods-card
      class="goods"
      v-for="goodsa in goodsData"
      :key="goodsa.iid"
      :goodImg="goodsa.showLarge.img"
      :header="goodsa.title"
      :price="goodsa.orgPrice"
      :collectNum="goodsa.sale"
      ></goods-card>
    </waterfall>

  </div>
</template>

<script>
import goodsCard from '@/components/goodsCard'
import API from '@/api/modules/mine'
export default {
  name: 'mine',
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
    })
  },
  components: {
    goodsCard
  }
}
</script>

<style lang="scss" scoped>
.mine {
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;
}
.goods {
  margin-bottom: 20px;
  // &:nth-child(2n) {
  //   margin-left: 20px;
  // }
}
</style>
