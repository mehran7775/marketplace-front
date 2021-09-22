import EventService from "~/services/EventService";
import Vue from 'vue'
const state = () => ({

})

const mutations = {

}

const actions = {
    // async get_products() {
    //     try {
    //         const {
    //             data
    //         } = await EventService.getProducts()
    //         console.log(data)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // },
    // async getProduct() {
    //     try {
    //         const {
    //                data
    //         } = await EventService.getProducts()
    //         console.log(data)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    async addProductToCart() {
        try {
            const res = await EventService.checkExistProduct()
            console.log('th')
            if (res.status === 200) {
                this.$bvToast.toast('محصول به سبد خرید اضاف شد', {
                    title: `افزودن به سبد خرید`,
                    variant: 'success',
                    toaster: 'b-toaster-top-center',
                    solid: true
                    //  autoHideDelay: 5000,
                })
            }
        } catch (e) {
            if (e.response) {
                this.$bvToast.toast('محصول در حاظر تمام شده است', {
                    title: `افزودن به سبد خرید`,
                    variant: 'danger',
                    toaster: 'b-toaster-top-center',
                    solid: true
                    //  autoHideDelay: 5000,
                })
            } else {
            //    Vue.prototype.$toast = toast
                this._vm.$bvToast.toast('خطایی در ارتباط با سرور اتفاق افتاده است', {
                    title: ``,
                    variant: 'danger',
                    toaster: 'b-toaster-top-center',
                    solid: true
                    //  autoHideDelay: 5000,
                })
            }

        }
    },
};

const getters = {

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
