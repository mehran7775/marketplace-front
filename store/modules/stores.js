const state = () => ({
    data
})
const getters = {

};

const mutations = {
    SET_STORES(state, payload) {
        this.$set(state, 'stores', payload)
    },
    SET_MESSAGE(state, payload) {
        this.$set(state, 'message', payload)
    }
}

const actions = {

    async get_stores({ commit, state }) {
        try {
            // const res = await this.$axios.get("/store");
            // if (res.data.length > 0) {
            //     commit('SET_STORES', res.data)
            // } 
            // else if(res.data.length <=0) {
            //     commit('SET_STORES', [])
            //     commit('SET_MESSAGE', res.message)
            // }
        } catch (e) {
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
