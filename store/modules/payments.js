const state = {
}
const getters = {

};

const mutations = {
    set_getways(store, payload) {
        this.$set(store, 'getways', payload)
    },
    set_order_id(store, payload) {
        this.$set(store, 'order_id', payload)
    }
}

const actions = {
    async select_way_payment({ commit }, payload) {
        try {
            const { data } = await this.$axios.post('/order/create', payload)
            this.$store.commit('set_order_id', data.order_id)
            $nuxt.$bvModal.show('modal-prevent-closing')
        } catch (e) {
            console.log(e)
            commit('open_toast', {
                msg: 'خطایی در ثبت اردر اتفاق افتاده است',
                variant: 'error'
            }, { root: true })

        }
    },
    do_payment({ commit, state }, payload) {
        try {
            this.$axios.post(`pay/order/${state.order_id}`, payload)
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
