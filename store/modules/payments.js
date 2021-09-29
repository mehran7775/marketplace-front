const state = () => ({

})
const getters = {

};

const mutations = {
    SET_GETWAYS(store, payload) {
        this.$set(store, 'getways', payload)
    }
}

const actions = {
    async select_way_payment({ commit }, payload) {
        try {
            await this.$axios.post('/order/create', payload)
            $nuxt.$bvModal.show('modal-prevent-closing')
        } catch (e) {
            console.log(e)
            commit('OPEN_TOAST', {
                title: 'ثبت سفارش',
                msg: 'خطایی در ثبت اردر اتفاق افتاده است',
                variant: 'danger'
            }, { root: true })

        }
    },
    do_payment(payload) {
        try {
            this.$axios.post(`pay/order/${payload}`)
        } catch (e) {
            console.log(e)
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
