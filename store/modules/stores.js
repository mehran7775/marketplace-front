const state = {
    id:null
}
const getters = {

};

const mutations = {
    set_id(state, payload) {
        state.id=payload
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

