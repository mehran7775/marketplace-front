const state = () => ({

})
const getters = {

};

const mutations = {

}

const actions = {
    addProductToCart({ commit }, product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || {}
        cart[$nuxt.$route.params.store_slug] = cart[$nuxt.$route.params.store_slug] || []
        if ( product.quantity > 0 || product.quantity == 'نامحدود' ) {
            if (!cart[$nuxt.$route.params.store_slug].some((el) => el.id == product.id)) {
              cart[$nuxt.$route.params.store_slug].push( product )
            }else {
              let item = cart[ $nuxt.$route.params.store_slug ].find(element => {
                return element.id === product.id
              })
              if ( item.is_multiple ) {
                if( parseInt(item.count + product.count) > product.quantity ){
                  commit(
                    "open_toast",
                    {
                      msg: "تعداد محصول برابر با حداکثر موجودی است",
                      variant: "warning",
                    },
                    { root: true }
                  )
                  return
                }
                
                item.count = item.count + product.count
                localStorage.setItem('cart',JSON.stringify(cart))
                commit(
                  "open_toast",
                  {
                    msg: "محصول به سبد خرید اضافه شد",
                    variant: "success",
                  },
                  { root: true }
                )
                return
              }else {
                commit(
                  "open_toast",
                  {
                    msg: "بیشتراز یک عدد ازاین محصول قابل خرید نیست",
                    variant: "warning",
                  },
                  { root: true }
                )
                return
              }
            }

            localStorage.setItem("cart", JSON.stringify(cart))
            $nuxt.$emit('refresh_basket', null)
            commit(
              "open_toast",
              {
                msg: "محصول به سبد خرید اضافه شد",
                variant: "success",
              },
              { root: true }
            )
        } else {
          commit(
            "open_toast",
            {
              msg: "درحال حاضر موجودی محصول کافی نمی باشد",
              variant: "error",
            },
            { root: true }
          );
        }
    },
    deleteProductFromCart({commit} , pid){
      let cart = JSON.parse(localStorage.getItem("cart"))
      const product= cart[$nuxt.$route.params.store_slug].find(({ id }) => id === pid)
      cart[$nuxt.$route.params.store_slug].splice( cart[$nuxt.$route.params.store_slug].indexOf(product), 1)
      localStorage.setItem('cart',JSON.stringify(cart))
      commit(
        "open_toast",
        {
          msg: "محصول از سبد خرید حذف شد",
          variant: "warning",
        },
        { root: true }
      )
  
      $nuxt.$emit('refresh-cart', null)
      $nuxt.$emit('refresh_basket', null)
    },
    minusProduct({commit}, pid){
      let cart = JSON.parse(localStorage.getItem("cart"))
      let product = cart[$nuxt.$route.params.store_slug].find(({ id }) => id === pid)
      if(product.count > 1) {
        product.count--
        localStorage.setItem('cart',JSON.stringify(cart))
        $nuxt.$emit('refresh-cart',null)
      }
    },
    plusProduct({commit}, pid){
        let cart = JSON.parse(localStorage.getItem("cart"))
        let product = cart[$nuxt.$route.params.store_slug].find(({ id }) => id === pid)
        if(product.is_multiple){
          if(product.count >= product.quantity){
            commit(
              "open_toast",
              {
                msg: "تعداد محصول برابر با حداکثر موجودی است",
                variant: "warning",
              },
              { root: true }
            )
            return
          }
          product.count++
          localStorage.setItem('cart',JSON.stringify(cart))
          $nuxt.$emit('refresh-cart')
        }else{
          commit(
            "open_toast",
            {
              msg: "بیشتراز یک عدد ازاین محصول قابل خرید نیست",
              variant: "warning",
            },
            { root: true }
          )
        }
        
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
