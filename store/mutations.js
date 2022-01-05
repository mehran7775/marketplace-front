import Vue from 'vue'
export default{
    setToState(state,payload){
        Vue.set(state,payload.name,payload.data)
    },
    deleteFromState(state,payload){
        Vue.delete(state,payload)
    },
    open_toast(store,payload){
        $nuxt.$toast(payload.msg,{
            position:'top-center',
            type:payload.variant,
            toastClassName:"toast-body"
        });
    },
}