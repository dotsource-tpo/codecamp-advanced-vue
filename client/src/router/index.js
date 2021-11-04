import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Impressum from '@/pages/Impressum'
import Author from '@/pages/Author'
import Article from '@/pages/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum
    },
    {
      path: '/author',
      name: 'Author',
      component: Author
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    }
  ]
})
