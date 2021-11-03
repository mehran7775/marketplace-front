
const state = {
    phone_number:null,
    current_user:null,
    errorsApi:''
}

const getters = {
    errorsApi(state) {
        return state.errorsApi
      },
}

const mutations = {
   set_phone_number(state,payload){
       state.phone_number=payload
   },
   set_current_user(state,payload){
       state.current_user=payload
   },
   setApiError(state,payload){
    state.errorsApi=payload
   }
};

const actions = {
  
};



export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
