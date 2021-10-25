import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b6d9933 = () => interopDefault(import('..\\pages\\seller\\index.vue' /* webpackChunkName: "pages/seller/index" */))
const _3f6d1530 = () => interopDefault(import('..\\pages\\signin\\index.vue' /* webpackChunkName: "pages/signin/index" */))
const _7cf4adfa = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _069e7440 = () => interopDefault(import('..\\pages\\test\\index.vue' /* webpackChunkName: "pages/test/index" */))
const _4bf5b22c = () => interopDefault(import('..\\pages\\admin\\customers\\index.vue' /* webpackChunkName: "pages/admin/customers/index" */))
const _11f45f44 = () => interopDefault(import('..\\pages\\admin\\gateways\\index.vue' /* webpackChunkName: "pages/admin/gateways/index" */))
const _02ba30e4 = () => interopDefault(import('..\\pages\\admin\\orders\\index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _78b3e1cf = () => interopDefault(import('..\\pages\\admin\\ports\\index.vue' /* webpackChunkName: "pages/admin/ports/index" */))
const _3c7794a1 = () => interopDefault(import('..\\pages\\admin\\stores\\index.vue' /* webpackChunkName: "pages/admin/stores/index" */))
const _1a9cd3ce = () => interopDefault(import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _48b49dc1 = () => interopDefault(import('..\\pages\\seller\\stores\\index.vue' /* webpackChunkName: "pages/seller/stores/index" */))
const _d7c4c3da = () => interopDefault(import('..\\pages\\admin\\gateways\\add.vue' /* webpackChunkName: "pages/admin/gateways/add" */))
const _3962475e = () => interopDefault(import('..\\pages\\admin\\ports\\add.vue' /* webpackChunkName: "pages/admin/ports/add" */))
const _8c8ef2a0 = () => interopDefault(import('..\\pages\\admin\\stores\\add.vue' /* webpackChunkName: "pages/admin/stores/add" */))
const _66d53676 = () => interopDefault(import('..\\pages\\seller\\stores\\create\\index.vue' /* webpackChunkName: "pages/seller/stores/create/index" */))
const _5f8ec166 = () => interopDefault(import('..\\pages\\admin\\customers\\_id\\find.vue' /* webpackChunkName: "pages/admin/customers/_id/find" */))
const _2329ff36 = () => interopDefault(import('..\\pages\\admin\\gateways\\_id\\find.vue' /* webpackChunkName: "pages/admin/gateways/_id/find" */))
const _0f6a3f42 = () => interopDefault(import('..\\pages\\admin\\stores\\_id\\find.vue' /* webpackChunkName: "pages/admin/stores/_id/find" */))
const _2d56c4ba = () => interopDefault(import('..\\pages\\admin\\users\\_id\\find.vue' /* webpackChunkName: "pages/admin/users/_id/find" */))
const _4fe5b62e = () => interopDefault(import('..\\pages\\seller\\_token.vue' /* webpackChunkName: "pages/seller/_token" */))
const _5ca7fcdc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _cc99fa4c = () => interopDefault(import('..\\pages\\_store_slug\\index.vue' /* webpackChunkName: "pages/_store_slug/index" */))
const _9fc0246a = () => interopDefault(import('..\\pages\\_store_slug\\admin\\index.vue' /* webpackChunkName: "pages/_store_slug/admin/index" */))
const _7255b78c = () => interopDefault(import('..\\pages\\_store_slug\\cart\\index.vue' /* webpackChunkName: "pages/_store_slug/cart/index" */))
const _16915a78 = () => interopDefault(import('..\\pages\\_store_slug\\complete-info\\index.vue' /* webpackChunkName: "pages/_store_slug/complete-info/index" */))
const _34615f88 = () => interopDefault(import('..\\pages\\_store_slug\\test\\index.vue' /* webpackChunkName: "pages/_store_slug/test/index" */))
const _4aa02d46 = () => interopDefault(import('..\\pages\\_store_slug\\admin\\orders\\index.vue' /* webpackChunkName: "pages/_store_slug/admin/orders/index" */))
const _e21215b2 = () => interopDefault(import('..\\pages\\_store_slug\\admin\\products\\index.vue' /* webpackChunkName: "pages/_store_slug/admin/products/index" */))
const _779bfa77 = () => interopDefault(import('..\\pages\\_store_slug\\admin\\products\\create.vue' /* webpackChunkName: "pages/_store_slug/admin/products/create" */))
const _1420ad0b = () => interopDefault(import('..\\pages\\_store_slug\\admin\\setting\\gateway.vue' /* webpackChunkName: "pages/_store_slug/admin/setting/gateway" */))
const _7e9958f7 = () => interopDefault(import('..\\pages\\_store_slug\\admin\\setting\\shipping.vue' /* webpackChunkName: "pages/_store_slug/admin/setting/shipping" */))
const _20a288e8 = () => interopDefault(import('..\\pages\\_store_slug\\admin\\setting\\store.vue' /* webpackChunkName: "pages/_store_slug/admin/setting/store" */))
const _309bfd67 = () => interopDefault(import('..\\pages\\_store_slug\\admin\\orders\\_id\\find.vue' /* webpackChunkName: "pages/_store_slug/admin/orders/_id/find" */))
const _5a99ecc8 = () => interopDefault(import('..\\pages\\_store_slug\\admin\\products\\_id\\find.vue' /* webpackChunkName: "pages/_store_slug/admin/products/_id/find" */))
const _f4942a3a = () => interopDefault(import('..\\pages\\_store_slug\\_products_id\\index.vue' /* webpackChunkName: "pages/_store_slug/_products_id/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/seller",
    component: _1b6d9933,
    name: "seller"
  }, {
    path: "/signin",
    component: _3f6d1530,
    name: "signin"
  }, {
    path: "/signup",
    component: _7cf4adfa,
    name: "signup"
  }, {
    path: "/test",
    component: _069e7440,
    name: "test"
  }, {
    path: "/admin/customers",
    component: _4bf5b22c,
    name: "admin-customers"
  }, {
    path: "/admin/gateways",
    component: _11f45f44,
    name: "admin-gateways"
  }, {
    path: "/admin/orders",
    component: _02ba30e4,
    name: "admin-orders"
  }, {
    path: "/admin/ports",
    component: _78b3e1cf,
    name: "admin-ports"
  }, {
    path: "/admin/stores",
    component: _3c7794a1,
    name: "admin-stores"
  }, {
    path: "/admin/users",
    component: _1a9cd3ce,
    name: "admin-users"
  }, {
    path: "/seller/stores",
    component: _48b49dc1,
    name: "seller-stores"
  }, {
    path: "/admin/gateways/add",
    component: _d7c4c3da,
    name: "admin-gateways-add"
  }, {
    path: "/admin/ports/add",
    component: _3962475e,
    name: "admin-ports-add"
  }, {
    path: "/admin/stores/add",
    component: _8c8ef2a0,
    name: "admin-stores-add"
  }, {
    path: "/seller/stores/create",
    component: _66d53676,
    name: "seller-stores-create"
  }, {
    path: "/admin/customers/:id/find",
    component: _5f8ec166,
    name: "admin-customers-id-find"
  }, {
    path: "/admin/gateways/:id/find",
    component: _2329ff36,
    name: "admin-gateways-id-find"
  }, {
    path: "/admin/stores/:id/find",
    component: _0f6a3f42,
    name: "admin-stores-id-find"
  }, {
    path: "/admin/users/:id/find",
    component: _2d56c4ba,
    name: "admin-users-id-find"
  }, {
    path: "/seller/:token",
    component: _4fe5b62e,
    name: "seller-token"
  }, {
    path: "/",
    component: _5ca7fcdc,
    name: "index"
  }, {
    path: "/:store_slug",
    component: _cc99fa4c,
    name: "store_slug"
  }, {
    path: "/:store_slug/admin",
    component: _9fc0246a,
    name: "store_slug-admin"
  }, {
    path: "/:store_slug/cart",
    component: _7255b78c,
    name: "store_slug-cart"
  }, {
    path: "/:store_slug/complete-info",
    component: _16915a78,
    name: "store_slug-complete-info"
  }, {
    path: "/:store_slug/test",
    component: _34615f88,
    name: "store_slug-test"
  }, {
    path: "/:store_slug/admin/orders",
    component: _4aa02d46,
    name: "store_slug-admin-orders"
  }, {
    path: "/:store_slug/admin/products",
    component: _e21215b2,
    name: "store_slug-admin-products"
  }, {
    path: "/:store_slug/admin/products/create",
    component: _779bfa77,
    name: "store_slug-admin-products-create"
  }, {
    path: "/:store_slug/admin/setting/gateway",
    component: _1420ad0b,
    name: "store_slug-admin-setting-gateway"
  }, {
    path: "/:store_slug/admin/setting/shipping",
    component: _7e9958f7,
    name: "store_slug-admin-setting-shipping"
  }, {
    path: "/:store_slug/admin/setting/store",
    component: _20a288e8,
    name: "store_slug-admin-setting-store"
  }, {
    path: "/:store_slug/admin/orders/:id/find",
    component: _309bfd67,
    name: "store_slug-admin-orders-id-find"
  }, {
    path: "/:store_slug/admin/products/:id/find",
    component: _5a99ecc8,
    name: "store_slug-admin-products-id-find"
  }, {
    path: "/:store_slug/:products_id",
    component: _f4942a3a,
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
