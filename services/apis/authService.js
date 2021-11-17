import axios from "~/plugins/axios"

export default{
    
    registerCustomer(payload){
        return axios.post('/customer/register',payload)
    },
    loginCustomer(payload){
        return axios.post('/customer/login',payload)
    },
    currentUser(payload){
        return axios.get('/customer/current',{
            headers:{
                authorization: "Bearer " + payload
            }
        })
    }
}