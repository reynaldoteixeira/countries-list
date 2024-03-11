import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/CountriesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'countries-page',
      component: HomeView
    }
  ]
})

export default router
