import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

// 导入组件
const Home = () => import('@/components/Home')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }
]

const router = createRouter({
  routes,
  history: routerHistory
})

export default router
