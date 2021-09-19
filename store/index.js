import EventService from "@/services/EventService";
import Vuex from 'vuex'
import users from "~/store/modules/users";


const createStore = () => {
    return new Vuex.Store({
        state: {},
        mutations: {},
        modules: {
            users
        }
    })
}

export default createStore;
