import Vue from "vue"
const state = {
    
}

const mutations = {
 
   setToState(state,payload){
    Vue.set(state, payload.name, payload.data)
   },
   deleteFromState(state, payload){
    Vue.delete(state, payload)
   },
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
