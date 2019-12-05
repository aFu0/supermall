import layout from '@/layout'
const goodsCart = {
  path: '/goods-cart',
  component: layout,
  redirect: '/goods-cart/index',
  children: [
    {
      path: 'index',
      name: 'goodsCart',
      component: () => import('@/views/goodsCart'),
      meta: {
        showTabBar: true
      }
    }
  ]
}
export default goodsCart
