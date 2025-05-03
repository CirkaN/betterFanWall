import { createRouter, createWebHistory } from 'vue-router'
import MainWall from '@/views/MainWall.vue'
import ShowPost from '@/views/Posts/ShowPost.vue'
import AddPost from '@/views/Admin/posts/AddPost.vue'
import AdminDashboardMainView from '@/views/Admin/AdminDashboardMainView.vue'
import PostDashboard from '@/views/Admin/posts/PostDashboard.vue'
import MainFrontPage from '@/views/Front/MainFrontPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainFrontPage,
      children:[
        {
          path: '/',
          name: 'dashboard',
          component: MainWall,
        },
        {
          path: '/video/:id',
          name: 'show_video',
          component: ShowPost,
        },
      ]
    },
  
    {
      path: "/admin",
      name: 'admin_dashboard_main',
      component: AdminDashboardMainView,
      children: [
        {
          path: "/admin/add_post",
          name: "add_post",
          component: AddPost,
        },
        {
          path: "/admin/posts/dashboard",
          name: "posts_dashboard",
          component: PostDashboard,
        },
      ]
    },
  ],
})

export default router
