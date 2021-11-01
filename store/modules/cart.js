const state = () => ({

})
const getters = {

};

const mutations = {

}

const actions = {
    addProductToCart({ commit, dispatch, getters }, product) {
        let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
        if (product.quantity > 0 ) {
            if (cart.length > 0) {
              if (cart.some((el) => el.id == product.id)) {
                const p = cart.find(({ id }) => id === product.id);
                p.count++;
              } else {
                const newObj = {
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  count: 1,
                };
                cart.push(newObj);
              }
            } else {
              const newObj = {
                id: product.id,
                name: product.name,
                price: product.price,
                count: 1,
              };
              cart.push(newObj);
            }
            localStorage.setItem("cartItems", JSON.stringify(cart))
            $nuxt.$emit('refresh_basket',JSON.parse(localStorage.getItem("cartItems")).length)
            commit(
              "open_toast",
              {
                msg: "محصول به سبد خرید اضاف شد",
                variant: "success",
              },
              { root: true }
            );
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
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
