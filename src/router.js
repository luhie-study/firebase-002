import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import(/* webpackChunkName: "auth" */ './views/Auth.vue'),
      children: [
        {
          path: 'register',
          component: () => import(/* webpackChunkName: "auth" */ '@/components/account/Register.vue')
        },
        {
          path: 'login',
          component: () => import(/* webpackChunkName: "auth" */ '@/components/account/Login.vue')
        }
      ]
    },
  ],

})
/*
  참고 https://router.vuejs.org/kr/guide/essentials/nested-routes.html
*/