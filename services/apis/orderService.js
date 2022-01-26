import axios from "~/plugins/axios"

export default{

    orderCreate(payload){
        let config = {}
        if(payload.token){
            config ={
                'Authorization' : `Bearer ${payload.token}`
            }
        }
        return axios.post('/order/create',payload,{
            headers: config
        })
    },
    orderPayment(payload){
        return axios.post(`pay/order/${payload.oId}`, payload.data)
    },
    getPaymentReceipt(payload){
        return axios.get(`pay/receipt/${ payload }`)
    },
    getPublicOrder(payload){
        return axios.get(`/pay/public-receipt/${payload}`)
    },

    //*******************************************************************
    //****************************** Admin Panel ***********************
    //******************************************************************* */ */


    getOrders(payload){
        return axios.get(`/order/customer/${payload.userId}`,{
            headers:{
                'Authorization' : `Bearer ${payload.token}`
            }
        })
    },

    //*******************************************************************
    //****************************** Customer Panel ***********************
    //******************************************************************* */ */

    getCustomersOrders(payload){
        return axios.get('/order/customer-orders',{
            headers:{
                'Authorization' : `Bearer ${payload}`
            }
        })
    }
}