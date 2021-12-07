import axios from "~/plugins/axios"

export default{

    orderCreate(payload){
        return axios.post('/order/create',payload)
    },
    orderPayment(payload){
        console.log(payload)
        return axios.post(`pay/order/${payload.oId}`, payload.data)
    }
}