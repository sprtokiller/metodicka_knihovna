import { createRouter, createWebHistory } from 'vue-router'
/* BEGIN DEV ONLY */
import HomeView from '../views/HomeView.vue'
import ActivityView from '../views/ActivityView.vue'
import SearchView from '../views/SearchView.vue'
/* END DEV ONLY */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/activity',
      name: 'activity',
      /* BEGIN DEV ONLY */
      component: ActivityView
      /* END DEV ONLY */
      /* BEGIN PROD ONLY */
      // component: () => import('../views/ActivityView.vue')
      /* END PROD ONLY */
    },
    {
      path: '/search',
      name: 'search',
      /* BEGIN DEV ONLY */
      component: SearchView
      /* END DEV ONLY */
      /* BEGIN PROD ONLY */
      // component: () => import('../views/SearchView.vue')
      /* END PROD ONLY */
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      /* BEGIN DEV ONLY */
      component: HomeView
      /* END DEV ONLY */
      /* BEGIN PROD ONLY */
      // component: () => import('../views/HomeView.vue')
      /* END PROD ONLY */
    }
  ]
})

export default router
