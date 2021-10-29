import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Impressum from '@/components/Impressum'
import Interactive from '@/components/Interactive'
import LoginForm from '@/components/LoginForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum
    },
    {
      path: '/interactive',
      name: 'Interactive',
      component: Interactive
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: LoginForm
    }
  ]
})
