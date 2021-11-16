import axios from "~/plugins/axios"

export default{
    registerCustomer(payload){
        return axios.post('/customer/register',payload)
    },
    loginCustomer(){

    }
}