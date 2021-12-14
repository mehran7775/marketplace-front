import Vue from 'vue'
import { storeService } from '~/services/apiServices';
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
    
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

