import EventService from "~/services/EventService";
import Vue from 'vue'
const state = () => ({

})
const getters = {

};

const mutations = {
   
}

const actions = {
    async addProductToCart({ commit,dispatch,getters }, product) {
        try {
            const res = await EventService.checkExistProduct()
            if (res.status === 200) {
                let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
                if (cart.length > 0) {
                    if (cart.some(el => el.id == product.id)) {
                        const p = cart.find(({ id }) => id === product.id)
                        p.counter++
                    } else {
                        const newObj = {
                            id: product.id,
                            counter: 1
                        }
                        cart.push(newObj)
                    }
                } else {
                    const newObj = {
                        id: product.id,
                        counter: 1
                    }
                    cart.push(newObj)
                }
                localStorage.setItem('cartItems', JSON.stringify(cart))
                console.log(JSON.parse(localStorage.getItem('cartItems')))
                this.$store.commit('OPEN_TOAST',{
                    title:'افزودن به سبد خرید',
                    msg:'محصول به سبد خرید اضاف شد',
                    variant:'success'
                },{ root: true })
            }
        } catch (e) {
            if (e.response) {
                commit('OPEN_TOAST',{
                    title:'',
                    msg:'محصول در حاظر تمام شده است',
                    variant:'danger'
                },{ root: true })
            } else {
                commit('OPEN_TOAST',{
                    title:'',
                    msg:'خطایی در ارتباط با سرور اتفاق افتاده است',
                    variant:'danger',
                    vm:this
                },{ root: true })
            }
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
