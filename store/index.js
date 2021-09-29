import Vuex from 'vuex'
import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import users from "~/store/modules/users";
import products from "~/store/modules/products";
import payments from "~/store/modules/payments";


const createStore = () => {
    return new Vuex.Store({
        state,
        getters,
        mutations,
        actions,
        modules: {
            users,
            products,
            payments
        }
    })
}

export default createStore;
