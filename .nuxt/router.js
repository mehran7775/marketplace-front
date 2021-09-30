import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _46eacfbe = () => interopDefault(import('..\\pages\\test\\index.vue' /* webpackChunkName: "pages/test/index" */))
const _296b58e0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _50a344c8 = () => interopDefault(import('..\\pages\\_store_slug\\index.vue' /* webpackChunkName: "pages/_store_slug/index" */))
const _97a1566e = () => interopDefault(import('..\\pages\\_store_slug\\admin\\index.vue' /* webpackChunkName: "pages/_store_slug/admin/index" */))
const _63dde57c = () => interopDefault(import('..\\pages\\_store_slug\\cart\\index.vue' /* webpackChunkName: "pages/_store_slug/cart/index" */))
const _087e3914 = () => interopDefault(import('..\\pages\\_store_slug\\complete-info\\index.vue' /* webpackChunkName: "pages/_store_slug/complete-info/index" */))
const _5d2bbe6c = () => interopDefault(import('..\\pages\\_store_slug\\test\\index.vue' /* webpackChunkName: "pages/_store_slug/test/index" */))
const _1e2fe06b = () => interopDefault(import('..\\pages\\_store_slug\\admin\\create_store\\index.vue' /* webpackChunkName: "pages/_store_slug/admin/create_store/index" */))
const _6c124a25 = () => interopDefault(import('..\\pages\\_store_slug\\_products_id\\index.vue' /* webpackChunkName: "pages/_store_slug/_products_id/index" */))

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
    component: _46eacfbe,
    name: "test"
  }, {
    path: "/",
    component: _296b58e0,
    name: "index"
  }, {
    path: "/:store_slug",
    component: _50a344c8,
    name: "store_slug"
  }, {
    path: "/:store_slug/admin",
    component: _97a1566e,
    name: "store_slug-admin"
  }, {
    path: "/:store_slug/cart",
    component: _63dde57c,
    name: "store_slug-cart"
  }, {
    path: "/:store_slug/complete-info",
    component: _087e3914,
    name: "store_slug-complete-info"
  }, {
    path: "/:store_slug/test",
    component: _5d2bbe6c,
    name: "store_slug-test"
  }, {
    path: "/:store_slug/admin/create_store",
    component: _1e2fe06b,
    name: "store_slug-admin-create_store"
  }, {
    path: "/:store_slug/:products_id",
    component: _6c124a25,
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
