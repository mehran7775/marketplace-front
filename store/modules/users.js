
const state = () => ({
    users: []
});


const mutations = {
    setUsers(state, users) {
        state.users = users;
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
