import axios from "~/plugins/axios";

export default{
    getDetail( payload ){
        return axios.get(`/store/${payload}`)
    },
    getAll( token ,params = null){
        return axios.get(`/store/all`,{
            params:params,
            headers:{
                "authorization":`Bearer ${ token }`
            }
        })
    }
}