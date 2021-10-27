
const state = () => ({
    phone_number:null
});


const mutations = {
   set_phone_number(state,payload){
       state.phone_number=payload
   }
};

const actions = {
  
};

const getters = {

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
