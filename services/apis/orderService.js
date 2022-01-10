import axios from "~/plugins/axios"

export default{

    orderCreate(payload){
        return axios.post('/order/create',payload)
    },
    orderPayment(payload){
        return axios.post(`pay/order/${payload.oId}`, payload.data)
    },
    getPaymentReceipt(payload){
        return axios.get(`pay/receipt/${ payload }`)
    },
    getPublicOrder(payload){
        return axios.get(`/pay/public-receipt/${payload}`)
    }
}