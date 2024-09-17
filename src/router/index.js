import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalData from '../components/PersonalData.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/form',
    name: 'form',
    component: PersonalData
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
