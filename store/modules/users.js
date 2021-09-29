
const state = () => ({
});


const mutations = {
    SET_ID(state,payload){
        this.$set(state,'id',payload)
    }
};

const actions = {
    test(){
        console.log('test')
    }
};

const getters = {
    getUsers(state) {
        return state.users;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
