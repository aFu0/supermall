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
        showTabBar: true
      }
    }
  ]
}
export default classify
