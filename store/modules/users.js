
const state = () => ({
});


const mutations = {
    SET_ID(state, payload) {
        this.$set(state, 'id', payload)
    },
    // TRIGGER_LOGIN(){
    //     console.log('f')
    // }
};

const actions = {
    test() {
        console.log('test')
    },
    trigger_login() {
        // this.$auth.loginWith("laravelJWT", {
        //         data: {
        //             outh_param: "09154078169",
        //             password: "771375",
        //             login_with_verification_code: false,
        //         },
        //     })
        //     .then(res => {
        //         console.log("reees", res)
        //     })
        //     .catch(e => {
        //         console.log("eee", e.response);
        //     });
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
