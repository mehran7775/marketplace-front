const state = () => ({

})
const getters = {

};

const mutations = {

}

const actions = {
    addProductToCart({ commit }, product) {
        let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
        if (product.quantity > 0 ) {
            if (!cart.some((el) => el.id == product.id)) {
              const newObj = {
                id: product.id,
                name: product.name,
                price: product.price,
                count: 1,
                img:product.img,
                quantity:product.quantity
              }
              
              cart.push(newObj)
            } else {
              commit(
                "open_toast",
                {
                  msg: "محصول به سبد خرید اضاف شده است",
                  variant: "warning",
                },
                { root: true }
              )
              return
            }
            localStorage.setItem("cartItems", JSON.stringify(cart))
            $nuxt.$emit('refresh_basket', null, { once : true})
            commit(
              "open_toast",
              {
                msg: "محصول به سبد خرید اضاف شد",
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
      let cart = JSON.parse(localStorage.getItem("cartItems"))
      const product=cart.find(({ id }) => id === pid)
      if(cart.indexOf(product) > -1){
        cart.splice(cart.indexOf(product),1)
        localStorage.setItem('cartItems',JSON.stringify(cart))
        commit(
          "open_toast",
          {
            msg: "محصول از سبد خرید حذف شد",
            variant: "warning",
          },
          { root: true }
        );
        $nuxt.$emit('refresh-cart', null, { once:true })
        $nuxt.$emit('refresh_basket', null, { once : true})
      }
    },
    minusProduct({commit}, pid){
      let cart = JSON.parse(localStorage.getItem("cartItems"))
      const p = cart.find(({ id }) => id === pid)
      if(p.count > 1) {
        p.count--
        localStorage.setItem('cartItems',JSON.stringify(cart))
        $nuxt.$emit('refresh-cart',null, { once:true })
      }
    },
    plusProduct({commit}, pid){
      let cart = JSON.parse(localStorage.getItem("cartItems"))
      const p = cart.find(({ id }) => id === pid)
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
      localStorage.setItem('cartItems',JSON.stringify(cart))
      $nuxt.$emit('refresh-cart',null, { once:true })
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
