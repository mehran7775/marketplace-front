
const state = {
    phone_number:null,
    current_user:null
}


const mutations = {
   set_phone_number(state,payload){
       state.phone_number=payload
   },
   set_current_user(state,payload){
       state.current_user=payload
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
