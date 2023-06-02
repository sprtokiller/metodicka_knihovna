import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView
      component: () => import('../views/ActivityView.vue')
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
