import Vue from 'vue'
import VueRouter from 'vue-router'
import FillableForm from '../components/FillableForm.vue'
import ResultPreview from '../components/ResultPreview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'form',
    component: FillableForm
  },
  {
    path: '/preview',
    name: 'preview',
    component: ResultPreview
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
