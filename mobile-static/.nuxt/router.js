import Vue from 'vue'
import Router from 'vue-router'

const _7ba3f7a1 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _76ca2497 = () => import('../pages/article-list/index.vue' /* webpackChunkName: "pages/article-list/index" */).then(m => m.default || m)
const _0f5edcc2 = () => import('../pages/article-list/_sort.vue' /* webpackChunkName: "pages/article-list/_sort" */).then(m => m.default || m)
const _2ac965f2 = () => import('../pages/article-detail/_id.vue' /* webpackChunkName: "pages/article-detail/_id" */).then(m => m.default || m)
const _55c9fa63 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/about",
			component: _7ba3f7a1,
			name: "about"
		},
		{
			path: "/article-list",
			component: _76ca2497,
			name: "article-list"
		},
		{
			path: "/article-list/:sort?",
			component: _0f5edcc2,
			name: "article-list-sort"
		},
		{
			path: "/article-detail/:id?",
			component: _2ac965f2,
			name: "article-detail-id"
		},
		{
			path: "/",
			component: _55c9fa63,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
