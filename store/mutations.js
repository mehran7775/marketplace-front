import state from './state'
export default{

    open_toast(store,payload){
        $nuxt.$toast(payload.msg,{
            position:'top-center',
            type:payload.variant,
            toastClassName:"toast-body"
        });
    }
}