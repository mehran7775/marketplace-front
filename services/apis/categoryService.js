import axios from "~/plugins/axios"

export default{
    
    findCategory(payload){
        return axios.get(`category/find/${payload.userId}`,{
            headers:{
                'Authorization': "Bearer " + payload.token
            }
        })
    }
}