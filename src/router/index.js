import { createRouter, createWebHistory } from 'vue-router'
import CatListView from '@/views/CatListView.vue'
import CatView from '@/views/CatView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: CatListView
    },
    {
      path:'/cat/:id',
      component: CatView,
      name: 'catCard',
      props: true
    }
  ]
})

export default router
