const state = {
    gateways:null,
    order_id:null
}
const getters = {

};

const mutations = {
    set_gateways(state, payload) {
        state.gateways=payload
    },
    set_order_id(state, payload) {
        state.order_id=payload
    }
}

const actions = {
     async select_way_payment({ commit }, payload) {
        const items = JSON.parse(localStorage.getItem("cartItems"));
        const items_second = [];
        items.forEach((element) => {
          items_second.push({
            id: element.id,
            quantity: element.count,
          });
        });
        payload["products"]=items_second
        try {
            const {data} = await this.$axios.post('/order/create', payload)
            console.log( data)
            commit('set_order_id', data.data.order_id)
            console.log('reees',data)
            $nuxt.$bvModal.show('modal-prevent-closing')
        } catch (e) {
            // console.log(e)
            commit('open_toast', {
                msg: e.response.data.message,
                variant: 'error'
            }, { root: true })

        }
    },
    do_payment({ commit, state }, payload) {
        try {
            console.log(state.order_id)
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
