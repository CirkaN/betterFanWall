import { createRouter, createWebHistory } from 'vue-router'
import MainWall from '@/views/MainWall.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainWall,
    }
  ],
})

export default router
