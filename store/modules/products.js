import EventService from "~/services/EventService";
const state = () => ({

})

const mutations = {

}

const actions = {
    async get_products() {
        try{
            const {data}=await EventService.get_products()
            console.log(data)
        }
        catch(e){
            console.log(e)
        }
    }
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
