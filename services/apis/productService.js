import axios from "~/plugins/axios";

export default{
    getProducts(payload){
        return axios.get(`/store/${payload}/products`)
    },
    getProduct(payload){
        return axios.get(`/product/${payload.store_slug}/${payload.products_id}`)
    }
}