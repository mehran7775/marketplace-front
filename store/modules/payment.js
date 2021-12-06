import Vue from 'vue'
import { orderService } from '@/services/apiServices'

const state = {
    
}
const mutations = {
    setToState(state,payload){
        Vue.set(state,payload.name,payload.data)
    },
    deleteFromState(state,payload){
        Vue.delete(state,payload)
    }

}
const getters = {
    apiErrors: state => {
        return state.apiErrors
    }
};

const actions = {
     async select_payment({ commit, rootState  }, payload) {
        const items = JSON.parse(localStorage.getItem("cart"))[$nuxt.$route.params.store_slug]
        if(rootState.detail.gateways && items && items.length > 0){
            const items_second = [];
            items.forEach((element) => {
              items_second.push({
                id: element.id,
                quantity: element.count,
              });
            });
            payload["products"] = items_second
            try {
                const {data} = await orderService.orderCreate(payload)
                if(data.data.order_id){
                    $nuxt.$router.push({path:`checkout`, query:{
                        data:data.data
                    }})
                    commit('user/deleteFromState', "apiErrors",{ root:true })
                    commit('deleteFromState', "apiErrors")
                }
            } catch (e) {
                if(e.response.data.data.length > 0 ){
                    commit('user/setToState',{
                        name: 'errorsApi',
                        data: e.response.data.data
                    },{root:true})
                    return
                }
                commit('open_toast', {
                    msg: e.response.data.message,
                    variant: 'error'
                }, { root: true })

            }
        }else{
            commit('open_toast', {
                msg: 'درگاه یا محصولی برای پرداخت وجود ندارد',
                variant: 'error'
            }, { root: true })
        }
    },
    async do_payment({ commit }, payload) {
        try {
            const {data} = await orderService.orderPayment({
                oId:localStorage.getItem("oId"),
                data:payload
            })
            const form = document.createElement("form");
            const input = document.createElement("input"); 
            form.method = "POST";
            form.action = data.data.url
            input.type="hidden"
            input.value=data.data.token
            input.name="token"
            form.appendChild(input)
            document.body.appendChild(form)
            localStorage.removeItem("dataPayment")
            form.submit()
        } catch (e) {
            commit('open_toast', {
                msg: e.response.data.message,
                variant: 'error'
            }, { root: true })

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
