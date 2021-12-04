import Vue from 'vue'
const state = {
  
}

const mutations = {
    setToState(state,payload){
        Vue.set(state, payload.name, payload.date)
    },
    deleteFromState(state, payload){
        Vue.delete(state, payload)
    }
};

const getters = {
    searchProducts:state =>{
       return state.searchProducts
   }
}

const actions = {
    async searchingProducts({ commit }, {store_slug, search}) {
        try{
            const res = await this.$axios.$get(
                `store/${store_slug}/search?q=${search}`
            );
            commit("setToState", {
                name: 'searchProducts',
                data: res.data
            });
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
