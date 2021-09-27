import Vue from 'vue'
const state = () => ({

})
const getters = {

};

const mutations = {

}

const actions = {
    async select_way_payment({commit},payload){
        try{
             await this.$axios.post('/select')
        }catch(e){
            console.log(e)
        }
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
