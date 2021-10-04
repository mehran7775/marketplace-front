export { default as Xbasket } from '../../components/Xbasket.vue'
export { default as Xbrand } from '../../components/Xbrand.vue'
export { default as Xbutton } from '../../components/Xbutton.vue'
export { default as Xform } from '../../components/Xform.vue'
export { default as Xitem } from '../../components/Xitem.vue'
export { default as Xsearch } from '../../components/Xsearch.vue'
export { default as UsersChangeAccess } from '../../components/users/change-access.vue'
export { default as MoleculesXheader } from '../../components/molecules/Xheader.vue'
export { default as MoleculesXlables } from '../../components/molecules/Xlables.vue'
export { default as MoleculesXmodal } from '../../components/molecules/Xmodal.vue'
export { default as MoleculesXsidebarBottom } from '../../components/molecules/XsidebarBottom.vue'
export { default as MainAside } from '../../components/main/aside.js'
export { default as MainHeader } from '../../components/main/header.vue'

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