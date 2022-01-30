import axios from "~/plugins/axios"

export default{
    
    userCurrent(payload){
        return axios.get('/user/current',{
            headers:{
                'Authorization': "Bearer " + payload
            }
        })
    },
    get_addresses(payload) {
        return axios.get('customer/address',{
            headers: {
                'Authorization' : `Bearer ${ payload }`
            }
        })
    },
    create_address(payload) {
        return axios.post('customer/address/create', payload.data, {
            headers:{
                'Authorization': "Bearer " + payload.token
            }
        })
    },
    update(payload){
        return axios.put(`customer/update`, payload.data, {
            headers:{
                'Authorization': "Bearer " + payload.token
            }
        })
    },


    // ************************* Admin Panel ********************
    
    updateCustomer(payload){
        return axios.put(`customer/update/${payload.data.userId}`,payload.data,{
            headers:{
                'Authorization': "Bearer " + payload.token
            }
        })
    }
}