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
        const items = JSON.parse(localStorage.getItem("cart"))[$nuxt.$route.params.store_slug]
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
            commit('set_order_id', data.data.order_id)
            $nuxt.$bvModal.show('modal-prevent-closing')
        } catch (e) {
            commit('open_toast', {
                msg: e.response.data.message,
                variant: 'error'
            }, { root: true })
        }
    },
    async do_payment({ commit, state }, payload) {
        try {
            const {data} = await this.$axios.post(`pay/order/${state.order_id}`, payload)
            const form = document.createElement("form");
            const input = document.createElement("input"); 
            form.method = "POST";
            form.action = data.data.url
            input.type="hidden"
            input.value=data.data.token
            input.name="token"
            form.appendChild(input)
            document.body.appendChild(form)
            form.submit()
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
