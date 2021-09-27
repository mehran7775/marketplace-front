import Vue from 'vue'
const state = () => ({

})
const getters = {

};

const mutations = {

}

const actions = {
    async select_way_payment({commit},payload){
        await this.$axios.post('/select')
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
