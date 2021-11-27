import Vue from 'vue'
const state = {
  
}

const mutations = {
    setProducts(state, data) {
        Vue.set(state, "searchProducts", data)
    },
    deleteProducts(state){
        Vue.delete(state,"searchProducts")
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
            console.log(res)
            commit("setProducts", res.data);
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
