import axios from "~/plugins/axios"

export default{
    
    userCurrent(payload){
        return axios.get('/user/current',{
            headers:{
                'Authorization': "Bearer " + payload
            }
        })
    }
}