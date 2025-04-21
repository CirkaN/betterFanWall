import { createRouter, createWebHistory } from 'vue-router'
import MainWall from '@/views/MainWall.vue'
import ShowPost from '@/views/Posts/ShowPost.vue'
import AddPost from '@/views/Admin/AddPost.vue'
import Dashboard from '@/views/Admin/Dashboard.vue'

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
    },
    {
      path: "/admin/add_post",
      name: "add_post",
      component: AddPost,
    },
    {
      path: "/admin/dashboard",
      name: "admin_dashboard",
      component: Dashboard,
    }
  ],
})

export default router
