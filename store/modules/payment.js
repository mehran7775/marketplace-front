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
     async select_way_payment({ commit, state,dispatch }, payload) {
        commit('user/setApiError','',{root:true})
        const items = JSON.parse(localStorage.getItem("cart"))[$nuxt.$route.params.store_slug]
        if(state.gateways && items && items.length > 0){
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
                if(state.gateways.length === 1){
                    dispatch('do_payment',{
                        gateway_id: state.gateways[0].id
                    });
                }else{
                   $nuxt.$bvModal.show('modal-prevent-closing')
                }

            } catch (e) {
                if(e.response.data.data){
                    const keys=Object.keys(e.response.data.data)
                    const eData={}
                    keys.forEach(element => {
                        eData[element]= e.response.data.data[element]
                    });
                    commit('user/setApiError',eData,{root:true})
                }
            }
        }else{
            commit('open_toast', {
                msg: 'درگاه یا محصولی برای پرداخت وجود ندارد',
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
