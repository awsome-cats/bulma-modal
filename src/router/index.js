import Vue from 'vue'
import VueRouter from 'vue-router'
import FilterMap from '../views/FilterMap.vue'
import SlotPractice from '../views/SlotPractice.vue'
import HandmaidModal from '../components/HandmaidModal.vue'
import Home from '../views/Home.vue'
import TestVmodel from '../views/TestVmodel.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/slot',
    name: 'SlotPractice',
    component: SlotPractice
  },
  {
    path: '/filter',
    name: 'FilterMap',
    component: FilterMap
  },
  {
    path: '/handmaid',
    name: 'HandmaidModal',
    component: HandmaidModal
  },
  {
    path: '/test',
    name: 'TestVmodel',
    component: TestVmodel
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
