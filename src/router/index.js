import { createRouter, createWebHistory } from 'vue-router'
import { useRoute } from 'vue-router'
const route = useRoute()

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },


    {
      path: '/aaaa-c-ninayaitana',
      name: 'aaaa-c-ninayaitana',
      // component: () => import(`../views/${route.params.cardId}/CardView.vue`),
      component: () => import(`../views/aaaa-c-ninayaitana/CardView.vue`),
    },
    {
      path: '/fedemarascoycintinavarro',
      name: 'fedemarascoycintinavarro',
      // component: () => import(`../views/${route.params.cardId}/CardView.vue`),
      component: () => import(`../views/aaaa-b-fedeycinti/CardView.vue`),
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },

    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    },
  ]
})

export default router
