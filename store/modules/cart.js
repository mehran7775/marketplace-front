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
        if (product.quantity > 0 ) {
            if (!cart[$nuxt.$route.params.store_slug].some((el) => el.id == product.id)) {
              cart[$nuxt.$route.params.store_slug].push( product )
            } else {
              commit(
                "open_toast",
                {
                  msg: "محصول به سبد خرید اضافه شده است",
                  variant: "warning",
                },
                { root: true }
              )
              return
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            $nuxt.$emit('refresh_basket', null, { once : true})
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
              msg: "درحال حاظر موجودی محصول کافی نمی باشد",
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
  
      $nuxt.$emit('refresh-cart', null, { once:true })
      $nuxt.$emit('refresh_basket', null, { once : true})
    },
    minusProduct({commit}, pid){
      let cart = JSON.parse(localStorage.getItem("cart"))
      const p = cart[$nuxt.$route.params.store_slug].find(({ id }) => id === pid)
      if(p.count > 1) {
        p.count--
        localStorage.setItem('cart',JSON.stringify(cart))
        $nuxt.$emit('refresh-cart',null, { once:true })
      }
    },
    plusProduct({commit}, pid){
        let cart = JSON.parse(localStorage.getItem("cart"))
        const p = cart[$nuxt.$route.params.store_slug].find(({ id }) => id === pid)
        if(p.is_multiple){
          if(p.count >= p.quantity){
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
          p.count++
          localStorage.setItem('cart',JSON.stringify(cart))
          $nuxt.$emit('refresh-cart',null, { once:true })
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
