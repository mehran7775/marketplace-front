import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _334bf88c = () => interopDefault(import('../pages/admin/customers/index.vue' /* webpackChunkName: "pages/admin/customers/index" */))
const _36a64980 = () => interopDefault(import('../pages/admin/gateways/index.vue' /* webpackChunkName: "pages/admin/gateways/index" */))
const _f11de792 = () => interopDefault(import('../pages/admin/ports/index.vue' /* webpackChunkName: "pages/admin/ports/index" */))
const _b7b2b2a6 = () => interopDefault(import('../pages/admin/users/index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _417ce90f = () => interopDefault(import('../pages/admin/gateways/add.vue' /* webpackChunkName: "pages/admin/gateways/add" */))
const _4ab6ebc6 = () => interopDefault(import('../pages/admin/ports/add.vue' /* webpackChunkName: "pages/admin/ports/add" */))
const _c4657d94 = () => interopDefault(import('../pages/admin/customers/_id/find.vue' /* webpackChunkName: "pages/admin/customers/_id/find" */))
const _72d8553a = () => interopDefault(import('../pages/admin/users/_id/find.vue' /* webpackChunkName: "pages/admin/users/_id/find" */))
const _791ac898 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _1907244d = () => interopDefault(import('../pages/_store_slug/index.vue' /* webpackChunkName: "pages/_store_slug/index" */))
const _64161f4d = () => interopDefault(import('../pages/_store_slug/admin/index.vue' /* webpackChunkName: "pages/_store_slug/admin/index" */))
const _2caaa390 = () => interopDefault(import('../pages/_store_slug/cart/index.vue' /* webpackChunkName: "pages/_store_slug/cart/index" */))
const _205df400 = () => interopDefault(import('../pages/_store_slug/complete-info/index.vue' /* webpackChunkName: "pages/_store_slug/complete-info/index" */))
const _a9ba5dac = () => interopDefault(import('../pages/_store_slug/test/index.vue' /* webpackChunkName: "pages/_store_slug/test/index" */))
const _7927316f = () => interopDefault(import('../pages/_store_slug/_products_id/index.vue' /* webpackChunkName: "pages/_store_slug/_products_id/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin/customers",
    component: _334bf88c,
    name: "admin-customers"
  }, {
    path: "/admin/gateways",
    component: _36a64980,
    name: "admin-gateways"
  }, {
    path: "/admin/ports",
    component: _f11de792,
    name: "admin-ports"
  }, {
    path: "/admin/users",
    component: _b7b2b2a6,
    name: "admin-users"
  }, {
    path: "/admin/gateways/add",
    component: _417ce90f,
    name: "admin-gateways-add"
  }, {
    path: "/admin/ports/add",
    component: _4ab6ebc6,
    name: "admin-ports-add"
  }, {
    path: "/admin/customers/:id/find",
    component: _c4657d94,
    name: "admin-customers-id-find"
  }, {
    path: "/admin/users/:id/find",
    component: _72d8553a,
    name: "admin-users-id-find"
  }, {
    path: "/",
    component: _791ac898,
    name: "index"
  }, {
    path: "/:store_slug",
    component: _1907244d,
    name: "store_slug"
  }, {
    path: "/:store_slug/admin",
    component: _64161f4d,
    name: "store_slug-admin"
  }, {
    path: "/:store_slug/cart",
    component: _2caaa390,
    name: "store_slug-cart"
  }, {
    path: "/:store_slug/complete-info",
    component: _205df400,
    name: "store_slug-complete-info"
  }, {
    path: "/:store_slug/test",
    component: _a9ba5dac,
    name: "store_slug-test"
  }, {
    path: "/:store_slug/:products_id",
    component: _7927316f,
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
