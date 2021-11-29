import Vue from "vue"
const state = {
    
}

const mutations = {
   set_phone_number(state,payload){
       Vue.set(state, "phone_number", payload)
   },
   set_current_user(state,payload){
       Vue.set(state, "current_user", payload)
   },
   setApiError(state,payload){
       Vue.set(state, "errorsApi", payload)
   },
   deleteApiError(){
    Vue.delete(state, "errorsApi")
   },
   delete_phone_number(){
    Vue.delete(state, "phone_number")
   }
};

const getters = {
    errorsApi(state) {
        return state.errorsApi
      },
}

const actions = {
  
};



export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
