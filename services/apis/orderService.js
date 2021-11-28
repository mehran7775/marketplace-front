import axios from "~/plugins/axios"

export default{
    orderCreate(payload){
        return axios.post('/order/create',payload)
    }
}