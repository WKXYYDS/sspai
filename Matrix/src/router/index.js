import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      // 异步加载
      component: () => import('../view/HomeView.vue')
    },
    {
      path: '/details',
      name: 'details',
      // 异步加载
      component: () => import('../view/DetailsView.vue')
    },
    {
      path: '/',
      redirect: "/home"
    }
  ]
})

export default router
