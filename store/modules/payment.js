import EventService from "~/services/EventService";
import Vue from 'vue'
const state = () => ({

})
const getters = {

};

const mutations = {

}

const actions = {
    async select_way_payment({commit},payload){
        await EventService.select_way_payment(payload)
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
