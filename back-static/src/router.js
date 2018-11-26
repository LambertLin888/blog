import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from './views/article-list.vue'
import About from './views/about.vue'
import Editor from './views/editor.vue'
import Detail from './views/detail.vue'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'article-list',
      component: ArticleList
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/editor/:id',
      name: 'editor',
      component: Editor
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
