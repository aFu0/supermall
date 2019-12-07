<template>
  <div class="goods-card">
    <img class="goods-card__goodimg" v-lazy="goodImg" alt="">
    <p class="goods-card__header">{{header}}</p>
    <span class="goods-card__price">{{price}}</span>
    <svg-icon class="goods-card__cllect-icon" iconNames="collect"/>
    <span class="goods-card__collect-num">{{collectNum}}</span>
  </div>
</template>

<script>
export default {
  name: 'goodsCard',
  props: {
    goodImg: {
      type: String,
      default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSolmhZLDqY77OGGWofLFpyj4_TATNKGkzmIjnR63V4nuVNzn8A&s'
    },
    header: {
      type: String,
      default: 'lalaala'
    },
    price: {
      type: String,
      default: '59.00'
    },
    collectNum: {
      type: [String, Number],
      default: '49'
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.goods-card {
  width: 334px;
  text-align: center;
  border-radius: 10px;
  box-shadow:0px 0px 16px 0px rgba(123,136,151,.2);
  &__goodimg {
    width: 100%;
    height: 440px;
    object-fit: initial;
    border-radius: 10px;
  }
  &__header {
    font-size: 24px;
    font-weight:bold;
    color: #1F1F1F;
  }
  &__price {
    font-size: 30px;
    color: #ff99cc;
  }
  &__cllect-icon {
    padding: 0 2px 10px 6px;
    font-size: 22px;
  }
  &__collect-num {
    font-size: 24px;
    color: #999;
  }
}
</style>
