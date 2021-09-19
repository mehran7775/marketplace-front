import axios from '~/plugins/axios'

export default {

    get_products(){
        return axios.get('/products')
    }

}
