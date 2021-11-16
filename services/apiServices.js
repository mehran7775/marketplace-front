import axios from "~/plugins/axios"

export const authService ={
    register(payload){
        return axios.post('/customer/register',payload)
    }
}