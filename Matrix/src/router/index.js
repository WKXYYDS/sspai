import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 首页
    {
      path: '/home',
      name: 'home',
      // 异步加载
      component: () => import('../view/HomeView.vue')
    },
    // 主体 二级页面
    {
      path: '/details',
      name: 'details',
      // 异步加载
      component: () => import('../view/DetailsView.vue')
    },
    // 首页 轮播图 少数之作
    {
      path: '/works',
      name: 'works',
      // 异步加载
      component: () => import('../view/WorksView.vue')
    },
    // 首页 轮播图 系列
    {
      path: '/series',
      name: 'series',
      // 异步加载
      component: () => import('../view/SeriesView.vue')
    },
    {
      path: '/',
      redirect: "/home"
    }
  ]
})

export default router
