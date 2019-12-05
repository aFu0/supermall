import layout from '@/layout'
const mine = {
  path: '/mine',
  component: layout,
  redirect: '/mine/index',
  children: [
    {
      path: 'index',
      name: 'mine',
      component: () => import('@/views/mine'),
      meta: {
        showTabBar: true
      }
    }
  ]
}
export default mine
