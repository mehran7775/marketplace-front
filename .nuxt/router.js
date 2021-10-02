import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _418a16c4 = () => interopDefault(import('..\\pages\\test\\index.vue' /* webpackChunkName: "pages/test/index" */))
const _784fa070 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _56960688 = () => interopDefault(import('..\\pages\\_store_slug\\index.vue' /* webpackChunkName: "pages/_store_slug/index" */))
const _09251cae = () => interopDefault(import('..\\pages\\_store_slug\\admin\\index.vue' /* webpackChunkName: "pages/_store_slug/admin/index" */))
const _c00ea6c8 = () => interopDefault(import('..\\pages\\_store_slug\\cart\\index.vue' /* webpackChunkName: "pages/_store_slug/cart/index" */))
const _5d042056 = () => interopDefault(import('..\\pages\\_store_slug\\complete-info\\index.vue' /* webpackChunkName: "pages/_store_slug/complete-info/index" */))
const _0d84e7ea = () => interopDefault(import('..\\pages\\_store_slug\\test\\index.vue' /* webpackChunkName: "pages/_store_slug/test/index" */))
const _feec156a = () => interopDefault(import('..\\pages\\_store_slug\\admin\\create_store\\index.vue' /* webpackChunkName: "pages/_store_slug/admin/create_store/index" */))
const _adf81d76 = () => interopDefault(import('..\\pages\\_store_slug\\_products_id\\index.vue' /* webpackChunkName: "pages/_store_slug/_products_id/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/test",
    component: _418a16c4,
    name: "test"
  }, {
    path: "/",
    component: _784fa070,
    name: "index"
  }, {
    path: "/:store_slug",
    component: _56960688,
    name: "store_slug"
  }, {
    path: "/:store_slug/admin",
    component: _09251cae,
    name: "store_slug-admin"
  }, {
    path: "/:store_slug/cart",
    component: _c00ea6c8,
    name: "store_slug-cart"
  }, {
    path: "/:store_slug/complete-info",
    component: _5d042056,
    name: "store_slug-complete-info"
  }, {
    path: "/:store_slug/test",
    component: _0d84e7ea,
    name: "store_slug-test"
  }, {
    path: "/:store_slug/admin/create_store",
    component: _feec156a,
    name: "store_slug-admin-create_store"
  }, {
    path: "/:store_slug/:products_id",
    component: _adf81d76,
    name: "store_slug-products_id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
