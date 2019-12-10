import layout from '@/layout'
const classify = {
  path: '/classify',
  component: layout,
  redirect: '/classify/index',
  children: [
    {
      path: 'index',
      name: 'classify',
      component: () => import('@/views/classify'),
      meta: {
        showTabBar: false
      }
    }
  ]
}
export default classify
