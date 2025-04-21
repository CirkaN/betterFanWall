import { createRouter, createWebHistory } from 'vue-router'
import MainWall from '@/views/MainWall.vue'
import ShowPost from '@/views/Posts/ShowPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainWall,
    },
    {
      path: '/video',
      name: 'video',
      component: ShowPost,
    }
  ],
})

export default router
