import EventService from "@/services/EventService";
import Vuex from 'vuex'
import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import users from "~/store/modules/users";
import products from "~/store/modules/products";


const createStore = () => {
    return new Vuex.Store({
        state,
        getters,
        mutations,
        actions,
        modules: {
            users,
            products
        }
    })
}

export default createStore;
