import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'
import PublicationsView from '../views/PublicationsView.vue'
import PartnersView from '../views/PartnersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/team',
      name: 'People',
      component: TeamView
    },
    {
      path: '/publications',
      name: 'Publications',
      component: PublicationsView
    },
    {
      path: '/partners',
      name: 'Partners',
      component: PartnersView
    },
    {
      path: '/contact',
      name: 'Contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
