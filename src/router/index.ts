import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import HomeView from '../view/HomeView.vue'

const routes:Array<RouteRecordRaw>=[
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/about',
    name:'about',
    // Lazy loading: Component
    component: () => import('../view/AboutView.vue')
  }
];
const router=createRouter({
    history: createWebHistory(),
  routes
})
export default router;