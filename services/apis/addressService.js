import axios from "~/plugins/axios"

export default{
    
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
    update_address(payload) {
        return axios.put(`customer/address/update/${payload.id}`, payload.data, {
            headers:{
                'Authorization': "Bearer " + payload.token
            }
        })
    },
    delete_address(payload) {
        return axios.delete(`customer/address/delete/${payload.id}`,{
            headers:{
                'Authorization': "Bearer " + payload.token
            }
        })
    },
}