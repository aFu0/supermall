import layout from '@/layout'
const home = {
  path: '/',
  component: layout,
  redirect: '/home',
  children: [
    {
      path: 'home',
      name: 'home',
      component: () => import('@/views/home'),
      meta: {
        showTabBar: true
      }
    }
  ]
}
export default home
