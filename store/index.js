import EventService from "@/services/EventService";
import Vuex from 'vuex'
import users from "~/store/modules/users";
import products from "~/store/modules/products";


const createStore = () => {
    return new Vuex.Store({
        state: {},
        mutations: {},
        modules: {
            users,
            products
        }
    })
}

export default createStore;
