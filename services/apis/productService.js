import axios from "~/plugins/axios";
// import Coockie from 'cookie-universal-nuxt'

export default{
    getProducts(payload){
        return axios.get(`/store/${payload.slug}/products`, { params: { categories: payload.categories } })
    },
    getProduct(payload){
        return axios.get(`/product/${payload.store_slug}/${payload.products_id}`)
    },




    //***************************************************************************************************
    //*************************************** PANEL SELLER **********************************************
    //***************************************************************************************************


    updateProduct(payload){
        // console.log('token',Coockie.get('token'))
        return axios.post(`product/update/${payload.data.id}`,payload.data,{
            headers:{
                'Authorization': `Bearer ${payload.token}`
            }
        })
    },
    deleteProduct(payload){
        return axios.post(`product/delete/${payload.id}`, null, {
            headers:{
                'Authorization': `Bearer ${payload.token}`
            }
        })
    }
}