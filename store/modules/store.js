import Vue from 'vue'

const state = {
  
}
const getters = {

};

const mutations = {
    setToState(state,payload){
        Vue.set(state, payload.name, payload.data)
    },
    deleteFromState(state,payload){
        Vue.delete(state, payload)
    }
}

const actions = {
    get_store_index() {

    },
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

