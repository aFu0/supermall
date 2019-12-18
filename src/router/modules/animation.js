import layout from '@/layout'
const animation = {
  path: '/animation',
  name: 'animation',
  component: layout,
  redirect: '/animation/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/animation')
    }
  ]
}
export default animation
