export const Xbasket = () => import('../..\\components\\Xbasket.vue' /* webpackChunkName: "components/xbasket" */).then(c => wrapFunctional(c.default || c))
export const Xbrand = () => import('../..\\components\\Xbrand.vue' /* webpackChunkName: "components/xbrand" */).then(c => wrapFunctional(c.default || c))
export const Xbutton = () => import('../..\\components\\Xbutton.vue' /* webpackChunkName: "components/xbutton" */).then(c => wrapFunctional(c.default || c))
export const Xform = () => import('../..\\components\\Xform.vue' /* webpackChunkName: "components/xform" */).then(c => wrapFunctional(c.default || c))
export const Xitem = () => import('../..\\components\\Xitem.vue' /* webpackChunkName: "components/xitem" */).then(c => wrapFunctional(c.default || c))
export const Xsearch = () => import('../..\\components\\Xsearch.vue' /* webpackChunkName: "components/xsearch" */).then(c => wrapFunctional(c.default || c))
export const MoleculesXheader = () => import('../..\\components\\molecules\\Xheader.vue' /* webpackChunkName: "components/molecules-xheader" */).then(c => wrapFunctional(c.default || c))
export const MoleculesXlables = () => import('../..\\components\\molecules\\Xlables.vue' /* webpackChunkName: "components/molecules-xlables" */).then(c => wrapFunctional(c.default || c))
export const MoleculesXmodal = () => import('../..\\components\\molecules\\Xmodal.vue' /* webpackChunkName: "components/molecules-xmodal" */).then(c => wrapFunctional(c.default || c))
export const MoleculesXsidebarBottom = () => import('../..\\components\\molecules\\XsidebarBottom.vue' /* webpackChunkName: "components/molecules-xsidebar-bottom" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
