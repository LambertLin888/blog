import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from './views/article-list.vue'

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/about.vue')
    },
    {
      path: '/editor/:id',
      name: 'editor',
      component: () =>
        import(/* webpackChunkName: "editor" */ './views/editor.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () =>
        import(/* webpackChunkName: "detail" */ './views/detail.vue')
    }
  ]
})
