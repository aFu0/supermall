<template>
  <div class="shopping">
    <div class="shopping__select-sum"><span class="shopping__select"></span></div>
    <img class="shopping__img" :src="img" alt="">
    <div class="good-text">
      <p class="good-text__header">{{header}}</p>
      <p class="good-text__referral">{{referral}}</p>
      <p class="good-text__statistics"><span>¥{{price}}</span><span>x{{num}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'statisticItem',
  props: {
    img: {
      type: String,
      default: '//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg'
    },
    header: {
      type: String,
      default: '2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装'
    },
    referral: {
      type: String,
      default: '商品描述: 2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装'
    },
    price: {
      type: String,
      default: '178.00'
    },
    num: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      btnStyle: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.shopping {
  width: 100%;
  display: flex;
  padding: 20px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
  &:nth-child(1) {
    padding-top: 0;
  }
  &__select-sum {
    display: flex;
    align-items: center;
    padding-right: 10px;
  }
  &__select {
    display: block;
    width: 26px;
    height: 26px;
    border: 4px solid #999;
    border-radius: 50%;
  }
  &__img {
    width: 22%;
    height: 200px;
    border-radius: 10px;
  }
}
.good-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 72%;
  padding: 0 10px;
  box-sizing: border-box;
  &__header {
    width: 96%;
    font-size: 34px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__referral {
    font-size: 24px;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__statistics {
    display: flex;
    justify-content: space-between;
  }
}
</style>
