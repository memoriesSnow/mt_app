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
    component: () => import('../components/movie.vue'),
    redirect:'/neko_eyes',
    children:[
      {
        path: '/neko_eyes',
        name: 'Neko_eyes',
        component: () => import('../components/movies/neko_eyes.vue')
      },
      {
        path: '/cinema',
        name: 'Cinema',
        component: () => import('../components/movies/cinema.vue')
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('../components/movies/mine.vue')
      },
    ]
  },
  {
    path:'/user',
    name:'User',
    component: () => import('../components/user.vue')
  },
  {
    path:'/cinema_search',
    name:'CinemaSearch',
    component: () => import('../components/movies/cinema_search.vue')
  },
  {
    path:'/KTV',
    name:'KTV',
    component: () => import('../components/ktv.vue')
  },
  {
    path:'/food_detail',
    name:'FoodDetail',
    component: () => import('../components/detail/food_detail.vue')
  },
]
import Cookie from '../utils/cookie.js'
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  let islogin = Cookie.get('username');
  console.log(Boolean(islogin))
  if(to.path == "/user" && from.path != '/login'){
    if(!islogin){
      next("/login");
    }else{
      next();
    }
  } else {
      next();
  }
})
export default router
