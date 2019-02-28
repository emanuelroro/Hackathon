import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Sell from './views/SellEvent.vue'
import SignIn from './views/SignIn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/event',
        component: Sell
    },
    {
        path: '/signIn',
        component: SignIn
    }
  ]
})