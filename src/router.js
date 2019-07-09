/*
TODO: 네비게이션 가드를 사용해 인증을 구현하려 함. 
https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/
https://www.freecodecamp.org/news/authentication-with-vue-js-firebase-5c3a82149f66/
https://router.vuejs.org/kr/guide/advanced/meta.html

*/
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
        },
        {
          path: 'findPassword',
          component: () => import(/* webpackChunkName: "auth" */ '@/components/account/FindPassword.vue')
        }
      ]
    },
  ],

})
/*
  참고 https://router.vuejs.org/kr/guide/essentials/nested-routes.html
*/