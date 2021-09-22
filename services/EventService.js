import axios from '~/plugins/axios'

export default {

    getProducts(){
        return axios.get(`/products`)
    },
    getProduct(id){
        return axios.get(`/products/${id}`)
    },
    checkExistProduct(id){
        return axios.post('/check-product-exist',id,null)
    }

}
