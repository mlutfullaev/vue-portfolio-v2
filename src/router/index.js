import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: MainView
  }],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 70,
        behavior: 'smooth'
      }
    }
  }
})

export default router
