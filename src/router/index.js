import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import('../homepage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import('../components/regist.vue')
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import('../components/food.vue')
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import('../components/movie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
