import axios from "~/plugins/axios"

export default{
    
    userCurrent(payload){
        return axios.get('/user/current',{
            headers:{
                'Authorization': "Bearer " + payload
            }
        })
    },
    updateCustomer(payload){
        return axios.put(`customer/update/${payload.data.id}`,payload.data,{
            headers:{
                'Authorization': "Bearer " + payload.token
            }
        })
    }
}