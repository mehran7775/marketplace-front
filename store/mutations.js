import Vue from 'vue'
export default{
    setToState(state,payload){
        Vue.set(state,payload.name,payload.data)
    },
    open_toast(store,payload){
        $nuxt.$toast(payload.msg,{
            position:'top-center',
            type:payload.variant,
            toastClassName:"toast-body"
        });
    },
}