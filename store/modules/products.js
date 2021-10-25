import api from '@/services/api'
const state = () => ({

})
const getters = {

};

const mutations = {

}

const actions = {
    // async addProductToCart({ commit, dispatch, getters }, product) {
    //     try {
    //         await this.$axios.post('check-product-exist',product.id)
    //         // if (res) {
    //             let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    //             if (cart.length > 0) {
    //                 if (cart.some(el => el.id == product.id)) {
    //                     const p = cart.find(({ id }) => id === product.id)
    //                     p.count++
    //                 } else {
    //                     const newObj = {
    //                         id: product.id,
    //                         name:product.name,
    //                         price:product.price,
    //                         count: 1
    //                     }
    //                     cart.push(newObj)
    //                 }
    //             } else {
    //                 const newObj = {
    //                     id: product.id,
    //                     name:product.name,
    //                     price:product.price,
    //                     count: 1
    //                 }
    //                 cart.push(newObj)
    //             }
    //             localStorage.setItem('cartItems', JSON.stringify(cart))
    //             commit('open_toast', {
    //                 msg: 'محصول به سبد خرید اضاف شد',
    //                 variant: 'success'
    //             }, { root: true })
    //         // }
    //     } catch (e) {
    //         if (e.response) {
    //             commit('open_toast', {
    //                 msg: 'محصول در حاظر تمام شده است',
    //                 variant: 'error'
    //             }, { root: true })
    //         } else {
    //             commit('open_toast', {
    //                 msg: 'خطایی در ارتباط با سرور اتفاق افتاده است',
    //                 variant: 'error',
    //                 vm: this
    //             }, { root: true })
    //         }
    //     }
    // },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
