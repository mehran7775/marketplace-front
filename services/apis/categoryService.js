import axios from "~/plugins/axios"

export default {

    get_shop_categories(payload) {
        return axios.get(`category/${payload}`)
    },

    // *************************** Panel ***************************

    getAllCategory(payload){
        return axios.get(`category/${payload.userId +'/'+ payload.store_id}`, {
            headers: {
                'Authorization': "Bearer " + payload.token
            }
        })
    },
    createCategory(payload) {
        return axios.post(`category/create`,
        { 
            title:payload.title,
            parent_id: payload.parent_id,
            store_id: payload.store_id
        }, {
            headers: {
                'Authorization': "Bearer " + payload.token
            }
        })
    },
    findCategory(payload) {
        return axios.get(`category/find/${payload.categoryId}`, {
            headers: {
                'Authorization': "Bearer " + payload.token
            }
        })
    },
    deleteCategory(payload) {
        return axios.delete(`category/delete/${payload.categoryId}`,{
            headers: {
                'Authorization': "Bearer " + payload.token
            }
        })
    },
   updateCategory(payload) {
        return axios.put(`category/update/${payload.categoryId}`,payload.data,{
            headers: {
                'Authorization': "Bearer " + payload.token
            }
        })
    },

    searchCategory(payload){
        return axios.get(`category/${payload.userId+'/'+payload.store_id}/search?q=${payload.search}`,{
            headers: {
                'Authorization': "Bearer " + payload.token
            }
        })
    }

}