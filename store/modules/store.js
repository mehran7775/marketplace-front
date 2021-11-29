import Vue from 'vue'

const state = {
  
}
const getters = {

};

const mutations = {
    set_id(state, payload) {
        Vue.set(state, "id", payload)
    },
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

