import Vuex from 'vuex'
import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import user from "~/store/modules/user";
import store from "~/store/modules/store"
import cart from "~/store/modules/cart";
import payment from "~/store/modules/payment";


const createStore = () => {
    return new Vuex.Store({
        state,
        getters,
        mutations,
        actions,
        modules: {
            user,
            cart,
            payment,
            store
        }
    })
}

export default createStore;
