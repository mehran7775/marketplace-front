export default{
      OPEN_TOAST(store,payload){
        this._vm.$bvToast.toast(payload.msg, {
            title: payload.title,
            variant: payload.variant,
            toaster: 'b-toaster-top-center',
            solid: true,
            //  autoHideDelay: 10000,
        })
    }
}