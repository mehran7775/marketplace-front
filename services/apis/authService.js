import axios from "~/plugins/axios"

export default{
    
    registerCustomer(payload){
        return axios.post('/customer/register',payload)
    },
    loginCustomer(payload){
        return axios.post('/customer/login',payload)
    },
    verifyLogin(pyload){
        return axios.post(`/customer/verify`,pyload)
    },
    currentUser(payload){
        return axios.get('/customer/current',{
            headers:{
                'Authorization': "Bearer " + payload
            }
        })
    },
    logOut( payload ){
        return axios.get('/customer/logout', {
            headers:{
                'Authorization' : `Bearer ${payload}`
            }
        })
    },





    //********************* Admin-Seller */
    log_out_user(payload){
        return axios.post('/logout', {
            headers:{
                'Authorization' : `Bearer ${payload}`
            }
        })
    }
}