
const state = () => ({
    
});


const mutations = {
   
};

const actions = {
    test() {
        console.log('test')
    },
    trigger_login() {
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
