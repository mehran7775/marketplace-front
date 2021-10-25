const state = () => ({

})
const getters = {

};

const mutations = {
    set_id(state, payload) {
        this.$set(state, 'id', payload)
    },
}

const actions = {
    get_store_index() {

    },
    // async get_stores({ commit, state }) {
    //     try {
    //         const res = await this.$axios.get("/store")
    //         if (res.data.data.total > 0) {
    //             commit('SET_STORES', res.data.data.data)
    //         }
    //         else if(res.data) {
    //             console.log(res.data.message)
    //             commit('SET_MESSAGE', res.data.message)
    //         }
    //     } catch (e) {
    //         console.log(e)
    //         if (e.response) {
    //             commit('OPEN_TOAST', {
    //                 msg: e.response.message,
    //                 tite: 'دریافت فروشگاه ها',
    //                 variant: 'danger'
    //             },{ root: true })
    //         }
    //         else {
    //             commit('OPEN_TOAST', {
    //                 msg: 'خطا در ارتباط',
    //                 tite: 'دریافت فروشگاه ها',
    //                 variant: 'danger'
    //             }, { root: true })
    //         }

    //     }
    // }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

